<template>
	<div class="statsDisplay">
		<h1 class="equipmentTitle allCaps">{{ equipment.name }}</h1>
		<h2 class="equipmentSubTitle allCaps">{{ equipment.class }}</h2>
		<div class="statsBaseContainer">
			<div v-for="(stat, statId) in calcStats.stats" :key="statId" class="statsContainer">
				<span class="statsText" :class="[stat.inactive ? 'inactiveStat' : '']">{{ stat.name }}:</span>
				<div class="statsValueContainer">
					<span class="statsValue fixedWidth" :class="[stat.inactive ? 'inactiveStat' : '']"
					>{{ stat.baseValue }}<span v-if="stat.percent">%</span></span
					>
					<span class="statsModifier fixedWidth">{{ stat.modifier }}</span>
					<span
						class="statsValue fixedWidth"
						:class="[stat.modified ? 'modifiedStat' : stat.inactive ? 'inactiveStat' : '']"
					>
						{{ stat.value }}<span v-if="stat.percent">%</span>
					</span>
				</div>
			</div>
			<h2 v-if="!isNaN(calcStats.dps)">DPS: {{ calcStats.dps }}</h2>
			<span v-if="!isNaN(calcStats.dps)" class="inactiveStat"
			><i>Theoretical</i> damage per second, ignoring armor break and weakspot bonuses.</span
			>
			<h2 v-if="!isNaN(calcStats.dpb)">Damage per shot: {{ calcStats.dpb }}</h2> <!-- damage per bullet -->
			<h2 v-if="!isNaN(calcStats.dpm)">Magazine damage: {{ calcStats.dpm }}</h2>
			<span v-if="!isNaN(calcStats.dpm)" class="inactiveStat"><i>Theoretical</i> damage per magazine.</span>
			<h2 v-if="!isNaN(calcStats.dpa)">Total damage: {{ calcStats.dpa }}</h2>
			<span v-if="!isNaN(calcStats.dpa)" class="inactiveStat"
			><i>Theoretical</i> total damage available with initial ammunition.</span
			>
			<h2 v-if="!isNaN(calcStats.ex1)">Total lighting time: {{ calcStats.ex1 }} minutes</h2>
			<span v-if="!isNaN(calcStats.ex1)" class="inactiveStat"
			><i>Theoretical</i> total lighting time available with initial ammunition.</span
			>
			<!--todo: add numbers for weakspot damage to all stats-->
			<h2 v-if="calcStats.visible">Total Costs:</h2>
			<p class="costList">
				<span class="costListItem" v-if="calcStats.cost.credits > 0">
					<img src="../assets/img/20px-Credit.png" alt="Credits" title="Credits"/>
					<span>{{ calcStats.cost.credits }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.bismor > 0">
					<img src="../assets/img/Bismor_icon.png" alt="Bismor" title="Bismor"/>
					<span>{{ calcStats.cost.bismor }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.croppa > 0">
					<img src="../assets/img/Croppa_icon.png" alt="Croppa" title="Croppa"/>
					<span>{{ calcStats.cost.croppa }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.enorPearl > 0">
					<img src="../assets/img/Enor_pearl_icon.png" alt="Enor Pearl" title="Enor Pearl"/>
					<span>{{ calcStats.cost.enorPearl }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.jadiz > 0">
					<img src="../assets/img/Jadiz_icon.png" alt="Jadiz" title="Jadiz"/>
					<span>{{ calcStats.cost.jadiz }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.magnite > 0">
					<img src="../assets/img/Magnite_icon.png" alt="Magnite" title="Magnite"/>
					<span>{{ calcStats.cost.magnite }}</span>
				</span>
				<span class="costListItem" v-if="calcStats.cost.umanite > 0">
					<img src="../assets/img/Umanite_icon.png" alt="Umanite" title="Umanite"/>
					<span>{{ calcStats.cost.umanite }}</span>
				</span>
			</p>
		</div>
	</div>
</template>
<!--todo: show most cost effective upgrade in tier (most change %)-->
<script>
	import store from "../store";

	const _calculateDamage = stats => {
		let damageWords = ["Damage", "Area Damage", "Electric Damage", "Direct Damage"];
		let magazineSizeWords = ["Tank Size", "Magazine Size", "Clip Size", "Combined Clip Size"];
		let ammoWords = ["Max Ammo", "Max Fuel"];
		let rateOfFireWords = ["Rate of Fire", "Combined Rate of Fire"];
		let reloadTimeWords = ["Reload Time"];
		let pelletsWords = ["Pellets"];
		let dpsStats = {};
		let specialCaseDoubleBarrel = false;
		for (let stat of stats) {
			if (damageWords.includes(stat.name)) {
				if (dpsStats.damage) {
					// there is a damage stat already, add the second one to it (probably area damage)
					dpsStats.damage += parseFloat(stat.value);
				} else {
					dpsStats.damage = parseFloat(stat.value);
				}
			} else if (magazineSizeWords.includes(stat.name) && !dpsStats.magazineSize) {
				dpsStats.magazineSize = parseFloat(stat.value);
			} else if (rateOfFireWords.includes(stat.name) && !dpsStats.rateOfFire) {
				dpsStats.rateOfFire = parseFloat(stat.value);
			} else if (reloadTimeWords.includes(stat.name) && !dpsStats.reloadTime) {
				dpsStats.reloadTime = parseFloat(stat.value);
			} else if (pelletsWords.includes(stat.name)) {
				dpsStats.damage = dpsStats.damage * parseFloat(stat.value);
			} else if (ammoWords.includes(stat.name)) {
				dpsStats.maxAmmo = parseFloat(stat.value);
			}

			// temporary special case for double barrel oc
			if (stat.name === "Double Barrel" && stat.value === "1") {
				specialCaseDoubleBarrel = true;
			}
		}
		if ((dpsStats.maxAmmo && !dpsStats.magazineSize) || (dpsStats.magazineSize && !dpsStats.maxAmmo)) {
			// special case for minigun
			let damagePerSecond = dpsStats.damage * dpsStats.rateOfFire;
			return {
				dps: parseFloat(damagePerSecond).toFixed(2),
				dpsw: parseFloat(damagePerSecond * 1).toFixed(2),
				dpb: dpsStats.damage,
				dpa: dpsStats.damage * dpsStats.maxAmmo,
				dpaw: dpsStats.damage * dpsStats.maxAmmo * 1
			};
		}

		let timeToEmpty = dpsStats.magazineSize / dpsStats.rateOfFire;
		let damageTime = timeToEmpty + dpsStats.reloadTime;
		let magazineDamage = dpsStats.damage * dpsStats.magazineSize;
		let damagePerSecond = magazineDamage / damageTime;
		if (specialCaseDoubleBarrel) {
			return {
				dps: parseFloat(damagePerSecond * 2).toFixed(2),
				dpsw: parseFloat(damagePerSecond).toFixed(2),
				dpb: dpsStats.damage * 2,
				dpm: magazineDamage,
				dpmw: magazineDamage * 1,
				dpa: dpsStats.damage * dpsStats.maxAmmo,
				dpaw: dpsStats.damage * dpsStats.maxAmmo * 1
			};
		}
		return {
			dps: parseFloat(damagePerSecond).toFixed(2),
			dpsw: parseFloat(damagePerSecond * 1).toFixed(2),
			dpb: dpsStats.damage,
			dpm: magazineDamage,
			dpmw: magazineDamage * 1,
			dpa: dpsStats.damage * dpsStats.maxAmmo,
			dpaw: dpsStats.damage * dpsStats.maxAmmo * 1
		};
	};

	const _calculateSpecialDamage = (stats, name) => {
		// todo: minigun should include spinup time in dps, aswell as cooling rate! -> spinup time + how much damage can be done until overheated.
		let dpsStats = {};

		switch (name) {
			case "BRT7 Burst Fire Gun": {
				for (let stat of stats) {
					if (stat.name === "Damage") {
						dpsStats.damage = parseFloat(stat.value);
					} else if (stat.name === "Burst Size") {
						dpsStats.burstSize = parseFloat(stat.value);
					} else if (stat.name === "Burst Speed") {
						dpsStats.burstSpeed = parseFloat(stat.value);
					} else if (stat.name === "Burst Damage") {
						dpsStats.burstBonus = parseFloat(stat.value);
					} else if (stat.name === "Max Ammo") {
						dpsStats.maxAmmo = parseFloat(stat.value);
					} else if (stat.name === "Magazine Size") {
						dpsStats.magazineSize = parseFloat(stat.value);
					} else if (stat.name === "Rate of Fire") {
						dpsStats.rateOfFire = parseFloat(stat.value);
					} else if (stat.name === "Reload Time") {
						dpsStats.reloadTime = parseFloat(stat.value);
					}
				}
				// damage over one burst (3 or 6 bullets used)
				let burstDamage = dpsStats.damage * dpsStats.burstSize;
				if (dpsStats.burstBonus) {
					burstDamage += dpsStats.burstBonus;
				}
				let burstMagazine = dpsStats.magazineSize / dpsStats.burstSize;
				// rate of fire is rate of bursts per second (burst speed ignored)
				let timeToEmpty = burstMagazine / dpsStats.rateOfFire;
				let damageTime = timeToEmpty + dpsStats.reloadTime;
				let magazineDamage = burstDamage * burstMagazine;
				let damagePerSecond = magazineDamage / damageTime;
				return {
					dps: parseFloat(damagePerSecond).toFixed(2),
					dpb: burstDamage,
					dpm: magazineDamage,
					dpa: burstDamage * (dpsStats.maxAmmo / dpsStats.burstSize)
				};
			}
			case "Flare Gun": {
				for (let stat of stats) {
					if (stat.name === "Duration") {
						dpsStats.duration = parseFloat(stat.value);
					} else if (stat.name === "Magazine Size") {
						dpsStats.magazineSize = parseFloat(stat.value);
					} else if (stat.name === "Max Ammo") {
						dpsStats.maxAmmo = parseFloat(stat.value);
					}
				}
				let lightingSeconds = (dpsStats.magazineSize + dpsStats.maxAmmo) * dpsStats.duration;
				let lightingMinutes = lightingSeconds / 60;
				return {
					ex1: lightingMinutes
				};
			}
			default: {
				return {};
			}
		}
	};

	const precisionCalc = a => {
		if (!isFinite(a)) return 0;
		var e = 1,
			p = 0;
		while (Math.round(a * e) / e !== a) {
			e *= 10;
			p++;
		}
		return p;
	};

	const calculateUpgradesForStat = (stat, upgradesForStat) => {
		// loop trough upgradesForStat and calculate
		// if multiply is true, put in temp array and loop trough all multiplications in the end, after normal calc is done
		let upgradesToMultiply = [];

		let modifiedValue = stat.value;
		let originalValue = stat.value;
		let statsPrecision = precisionCalc(modifiedValue);
		let basePrecision = precisionCalc(originalValue);
		let precision;

		for (let upgradeElement of upgradesForStat) {
			let upgradePrecision = precisionCalc(upgradeElement.value);
			let precisionTemp = statsPrecision > upgradePrecision ? statsPrecision : upgradePrecision;
			precision = basePrecision > precisionTemp ? basePrecision : precisionTemp;

			if (upgradeElement.multiply) {
				upgradesToMultiply.push(upgradeElement);
			} else {
				// calculation here
				if (upgradeElement.subtract) {
					modifiedValue = (parseFloat(modifiedValue) - parseFloat(upgradeElement.value)).toFixed(precision);
				} else {
					modifiedValue = (parseFloat(modifiedValue) + parseFloat(upgradeElement.value)).toFixed(precision);
				}
			}
		}
		if (upgradesToMultiply.length > 0) {
			for (let upgradetoMultiply of upgradesToMultiply) {
				// calculation here
				modifiedValue = (parseFloat(modifiedValue) * parseFloat(upgradetoMultiply.value)).toFixed(precision);
			}
		}
		modifiedValue = (parseFloat(modifiedValue)).toFixed(precision);
		let difference = (parseFloat(modifiedValue) - parseFloat(originalValue)).toFixed(precision);
		stat.modifier = `${difference < 0 ? "" : "+"}${difference}${stat.percent ? "%" : ""}`;
		stat.modified = true;
		stat.value = modifiedValue;
		stat.baseValue = originalValue;
		return stat;
	};

	const getModifiedStats = (baseStats, selectedUpgrades) => {
		// loop trough all selected upgrades
		let upgradesForEachStat = new Map();
		let costs = [];
		for (let upgrade of selectedUpgrades) {
			costs.push(upgrade.cost);

			// loop trough stats of upgrade
			for (let statKey in upgrade.stats) {
				let statContent = upgrade.stats[statKey];
				let tempContent = [];
				if (upgradesForEachStat.has(statKey)) {
					tempContent = upgradesForEachStat.get(statKey);
				}
				tempContent.push(statContent);
				upgradesForEachStat.set(statKey, tempContent);
			}
		}
		// group all upgrades by stat
		// loop trough groups and calculate new value for each stat
		// return stats
		let stats = [];
		for (let stat in baseStats) {
			let workingStat = Object.assign({}, baseStats[stat]);
			if (upgradesForEachStat.has(stat)) {
				let upgradesForStat = upgradesForEachStat.get(stat);
				let upgradedStat = calculateUpgradesForStat(workingStat, upgradesForStat);
				stats.push(upgradedStat);
			} else {
				if (workingStat.value === 0) {
					workingStat.inactive = true;
				}
				workingStat.baseValue = workingStat.value;
				stats.push(workingStat);
			}
		}

		// stats is array of objects:
		/*
		baseValue: 120
		modified: true
		modifier: "+24"
		name: "Battery Capacity"
		value: "144"
		...also
		*/

		return { stats: stats, costs: costs };
	};

	export default {
		name: "StatsDisplay",
		computed: {
			selectedClassId: function() {
				return store.state.selected.class;
			},
			selectedEquipmentId: function() {
				return store.state.selected.equipment;
			},
			equipment: function() {
				return store.state.tree[this.selectedClassId][this.selectedEquipmentId];
			},
			baseStats: function() {
				return store.state.tree[this.selectedClassId][this.selectedEquipmentId].baseStats;
			},
			calcStats: function() {
				let visible = false;
				let aSelectedUpgrades = store.state.tree[this.selectedClassId][this.selectedEquipmentId].mods.reduce(
					(array, tierArray) => {
						array.push(...tierArray.filter(mod => mod.selected));
						return array;
					},
					[]
				);
				let overclocks = store.state.tree[this.selectedClassId][this.selectedEquipmentId].overclocks;
				if (overclocks) {
					for (let overclock of store.state.tree[this.selectedClassId][this.selectedEquipmentId].overclocks) {
						if (overclock.selected) {
							aSelectedUpgrades.push(overclock);
						}
					}
				}

				let results = getModifiedStats(this.baseStats, aSelectedUpgrades);
				let stats = results.stats;
				let costs = results.costs;

				let damage = null;
				let specialEquipment = [
					"Cryo Cannon",
					"Experimental Plasma Charger",
					"Breach Cutter",
					"BRT7 Burst Fire Gun",
					"Flare Gun"
				];
				if (specialEquipment.includes(store.state.tree[this.selectedClassId][this.selectedEquipmentId].name)) {
					damage = _calculateSpecialDamage(stats, store.state.tree[this.selectedClassId][this.selectedEquipmentId].name);
				} else {
					damage = _calculateDamage(stats);
				}

				/* todo: temporary */
				if (store.state.tree[this.selectedClassId][this.selectedEquipmentId].name === "Zhukov NUK17" ||
					store.state.tree[this.selectedClassId][this.selectedEquipmentId].name === "\"Lead Storm\" Powered Minigun") {
					damage.dps = damage.dps / 2;
					damage.dpsw = damage.dpsw / 2;
					damage.dpm = damage.dpm / 2;
					damage.dpmw = damage.dpmw / 2;
					damage.dpa = damage.dpa / 2;
					damage.dpaw = damage.dpaw / 2;
				}
				/* todo: end temporary */

				let totalCost = {
					credits: 0,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				};
				for (let cost of costs) {
					totalCost.credits += cost.credits;
					totalCost.bismor += cost.bismor;
					totalCost.croppa += cost.croppa;
					totalCost.enorPearl += cost.enorPearl;
					totalCost.jadiz += cost.jadiz;
					totalCost.magnite += cost.magnite;
					totalCost.umanite += cost.umanite;
					totalCost.err += cost.err;
				}
				return {
					stats: stats,
					cost: totalCost,
					visible: visible,
					dps: damage.dps ? parseFloat(damage.dps).toFixed(0) : undefined,
					dpsw: damage.dpsw ? parseFloat(damage.dpsw).toFixed(0) : undefined,
					dpb: damage.dpb ? parseFloat(damage.dpb).toFixed(0) : undefined,
					dpm: damage.dpm ? parseFloat(damage.dpm).toFixed(0) : undefined,
					dpmw: damage.dpmw ? parseFloat(damage.dpmw).toFixed(0) : undefined,
					dpa: damage.dpa ? parseFloat(damage.dpa).toFixed(0) : undefined,
					dpaw: damage.dpaw ? parseFloat(damage.dpaw).toFixed(0) : undefined,
					ex1: damage.ex1 ? parseFloat(damage.ex1).toFixed(0) : undefined
				};
			}
		}
	};
</script>

<style scoped>
	h2 {
		text-transform: uppercase;
		font-size: 1rem;
		font-weight: normal;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.statsDisplay {
		flex: 1;
		height: 100%;
		width: 100%;
		padding-right: 1rem;

		display: flex;
		flex-flow: column;
		align-items: center;
	}

	@media (max-width: 1024px) {
		.statsDisplay {
			flex: 0 0 100%;
			order: 2;
			padding: 0;
		}
	}

	.equipmentTitle {
		font-size: 1.5rem;
		text-align: center;
		color: #fc9e00;
		margin-bottom: 0;
	}

	.equipmentSubTitle {
		text-align: center;
		color: #fffbff;
		font-size: 1rem;
		margin-top: 0;
	}

	.statsBaseContainer {
		width: 100%;
	}

	.statsContainer {
		display: flex;
		width: 100%;
	}

	.fixedWidth {
		width: 33%;
	}

	.statsValueContainer {
		width: 45%;
		display: flex;
		justify-content: end;
	}

	.statsText {
		width: 55%;
		color: rgba(255, 251, 255, 1);
	}

	.statsValue {
		color: #fc9e00;
		text-align: right;
	}

	.statsModifier {
		text-align: right;
		color: #fccc00;
	}

	.modifiedStat {
		color: #fccc00;
	}

	.inactiveStat {
		color: rgba(255, 251, 255, 0.2);
	}
</style>
