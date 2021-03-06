export default {
	selected: false,
	modified: false,
	name: "BRT7 Burst Fire Gun",
	class: "Pistol",
	icon: "equipment.G_S2_Burst",
	baseStats: {
		dmg: { name: "Damage", value: 14 },
		ammo: { name: "Max Ammo", value: 144 },
		clip: { name: "Magazine Size", value: 18 },
		rate: { name: "Rate of Fire", value: 2.5 },
		reload: { name: "Reload Time", value: 2.2 },
		ex1: { name: "Burst Size", value: 3 },
		ex2: { name: "Burst Speed", value: 0.05 },
		ex3: { name: "Spread Per Shot", value: 100, percent: true },
		ex4: { name: "Recoil", value: 100, percent: true },
		ex5: { name: "Armor Breaking", value: 70, percent: true },
		ex6: { name: "Weakpoint Damage Bonus", value: 0, percent: true },
		ex7: { name: "Burst Damage", value: 0 },
		ex8: { name: "Burst Stun Duration", value: 0 },
		ex9: { name: "Electro Minelets", value: 0, boolean: true },
	},
	mods: [
		[
			{
				selected: false,
				name: "High Velocity Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 2 }
				},
				cost: {
					credits: 1000,
					bismor: 0,
					croppa: 0,
					enorPearl: 20,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Disabled Safety",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text: "Shorter Delay between bursts",
				stats: {
					rate: { name: "Rate of Fire", value: 3 }
				},
				cost: {
					credits: 1000,
					bismor: 20,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Floating Barrel",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text:
					"Sweet, sweet optimization. We called in a few friends and managed to significantly improve the stability of this gun.",
				stats: {
					ex3: { name: "Spread Per Shot", value: 42, percent: true, subtract: true }
				},
				cost: {
					credits: 1800,
					bismor: 0,
					croppa: 18,
					enorPearl: 0,
					jadiz: 12,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Recoil Dampener",
				icon: "Icon_Upgrade_Recoil",
				type: "Recoil",
				text:
					"Quality engineering, the best laser cut parts, the tender loving care of a dedicated R&D Department. The recoil of your gun is drastically reduced.",
				stats: {
					ex4: { name: "Recoil", value: 50, percent: true, subtract: true }
				},
				cost: {
					credits: 1800,
					bismor: 18,
					croppa: 0,
					enorPearl: 12,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Quickfire Ejector",
				icon: "Icon_Upgrade_Speed",
				type: "Reload Speed",
				text:
					'Experience, training, and a couple of under-the-table design "adjustments" means your gun can be reloaded significantly faster. ',
				stats: {
					reload: { name: "Reload Time", value: 0.5, subtract: true }
				},
				cost: {
					credits: 1800,
					bismor: 0,
					croppa: 12,
					enorPearl: 0,
					jadiz: 18,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 12 }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 20,
					enorPearl: 0,
					jadiz: 30,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Increased Caliber Rounds",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 3 }
				},
				cost: {
					credits: 2200,
					bismor: 0,
					croppa: 0,
					enorPearl: 20,
					jadiz: 0,
					magnite: 30,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Penetrating Rounds",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer?",
				stats: {
					ex5: { name: "Armor Breaking", value: 200, percent: true }
				},
				cost: {
					credits: 3800,
					bismor: 36,
					croppa: 0,
					enorPearl: 0,
					jadiz: 15,
					magnite: 25,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 72 }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 25,
					enorPearl: 15,
					jadiz: 0,
					magnite: 0,
					umanite: 36,
					err: 0
				}
			},
			{
				selected: false,
				name: "Hollow-Point Bullets",
				icon: "Icon_Upgrade_Weakspot",
				type: "Weak Spot Bonus",
				text:
					"Hit 'em where it hurts! Literally! We've upped the damage you'll be able to do to any creatures fleshy bits. You're welcome.",
				stats: {
					ex6: { name: "Weakpoint Damage Bonus", value: 40, percent: true }
				},
				cost: {
					credits: 3800,
					bismor: 0,
					croppa: 0,
					enorPearl: 36,
					jadiz: 26,
					magnite: 15,
					umanite: 0,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Burst Damage",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "Damage bonus on last bullet if the first two hit",
				stats: {
					ex7: { name: "Burst Damage", value: 10 }
				},
				cost: {
					credits: 4400,
					bismor: 0,
					croppa: 40,
					enorPearl: 0,
					jadiz: 110,
					magnite: 0,
					umanite: 60,
					err: 0
				}
			},
			{
				selected: false,
				name: "Burst Stun",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Stun target if all shots in a burst hit",
				stats: {
					ex8: { name: "Burst Stun Duration", value: 3 }
				},
				cost: {
					credits: 4400,
					bismor: 40,
					croppa: 60,
					enorPearl: 0,
					jadiz: 0,
					magnite: 110,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Longer Burst",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text: "Fire more rounds in each burst",
				stats: {
					ex1: { name: "Burst Size", value: 3 }
				},
				cost: {
					credits: 4400,
					bismor: 60,
					croppa: 0,
					enorPearl: 110,
					jadiz: 40,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			}
		]
	],
	overclocks: [
		{
			selected: false,
			name: "Composite Casings",
			icon: "Icon_Upgrade_FireRate",
			type: "clean",
			cost: {
				credits: 7950,
				bismor: 0,
				croppa: 140,
				enorPearl: 75,
				jadiz: 0,
				magnite: 100,
				umanite: 0,
				err: 0
			},
			text: "Lighter rounds that permit a shorter delay between bursts and you can carry a few more of them as well. What's not to like?",
			stats: {
				ammo: { name: "Max Ammo", value: 36 },
				rate: { name: "Rate of Fire", value: 1 },
			}
		},
		{
			selected: false,
			name: "Full Chamber Seal",
			icon: "Icon_Upgrade_DamageGeneral",
			type: "clean",
			cost: {
				credits: 7850,
				bismor: 120,
				croppa: 0,
				enorPearl: 0,
				jadiz: 75,
				magnite: 110,
				umanite: 0,
				err: 0
			},
			text: "Meticulous sealing lets you get a bit more power out of each round and the attention to detail improves how easily the magazine slots in.",
			stats: {
				dmg: { name: "Damage", value: 1 },
				reload: { name: "Reload Time", value: 0.2, subtract: true },
			}
		},
		{
			selected: false,
			name: "Homebrew Powder",
			icon: "Icon_Overclock_ChangeOfHigherDamage",
			type: "clean",
			cost: {
				credits: 8050,
				bismor: 125,
				croppa: 0,
				enorPearl: 0,
				jadiz: 0,
				magnite: 75,
				umanite: 105,
				err: 0
			},
			text: "More damage on average but it's a bit inconsistent.",
			stats: {
				dmg: { name: "Damage", value: 1.1, multiply: true }
			}
		},
		{
			selected: false,
			name: "Compact Mags",
			icon: "Icon_Upgrade_Ammo",
			type: "balanced",
			cost: {
				credits: 7350,
				bismor: 0,
				croppa: 0,
				enorPearl: 0,
				jadiz: 75,
				magnite: 135,
				umanite: 105,
				err: 0
			},
			text: "You can carry even more ammo but the rate of fire needs to be toned back to avoid a jam and please take more care while reloading.",
			stats: {
				ammo: { name: "Max Ammo", value: 72 },
				rate: { name: "Rate of Fire", value: 1, subtract: true },
				reload: { name: "Reload Time", value: 0.4 },
			}
		},
		{
			selected: false,
			name: "Experimental Rounds",
			icon: "Icon_Upgrade_DamageGeneral",
			type: "balanced",
			cost: {
				credits: 8550,
				bismor: 0,
				croppa: 0,
				enorPearl: 100,
				jadiz: 75,
				magnite: 130,
				umanite: 0,
				err: 0
			},
			text: "A new shape to the bullet delivers a lot more damage but it's odd size means fewer rounds in the clip and a bit less ammo overall.",
			stats: {
				dmg: { name: "Damage", value: 5 },
				ammo: { name: "Max Ammo", value: 36, subtract: true },
				clip: { name: "Magazine Size", value: 6, subtract: true },
			}
		},
		{
			selected: false,
			name: "Electro Minelets",
			icon: "Icon_Upgrade_Electricity",
			type: "unstable",
			cost: {
				credits: 7450,
				bismor: 0,
				croppa: 0,
				enorPearl: 80,
				jadiz: 95,
				magnite: 0,
				umanite: 120,
				err: 0
			},
			text: "After impacting terrain, these high-tech bullets convert in to electro-minelets that will electrocute anything unfortunate enough to come close. However they don't last forever and the rounds themselves take more space in the clip and deal less direct damage.",
			stats: {
				ex9: { name: "Electro Minelets", value: 1, boolean: true },
				dmg: { name: "Damage", value: 3, subtract: true },
				clip: { name: "Magazine Size", value: 6, subtract: true },
			}
		},
		{
			selected: false,
			name: "Micro Fletchettes",
			icon: "Icon_Overclock_SmallBullets",
			type: "unstable",
			cost: {
				credits: 7650,
				bismor: 80,
				croppa: 0,
				enorPearl: 0,
				jadiz: 100,
				magnite: 130,
				umanite: 0,
				err: 0
			},
			text: "Convert the BRT to fire small flechettes instead of slugs. Increases overall ammo and clip size as well as reducing recoil but at the cost of pure damage.",
			stats: {
				ammo: { name: "Max Ammo", value: 144 },
				clip: { name: "Magazine Size", value: 24 },
				ex4: { name: "Recoil", value: 0.5, percent: true, multiply: true },
				ex3: { name: "Spread Per Shot", value: 20, percent: true, subtract: true },
				dmg: { name: "Damage", value: 0.5, multiply: true },
			}
		},
	]
};
