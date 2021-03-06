export default {
	selected: true,
	modified: false,
	name: '"Warthog" Auto 210',
	class: "Shotgun",
	icon: "equipment.E_P1_Warthog",
	baseStats: {
		dmg: { name: "Damage", value: 6 },
		ammo: { name: "Max Ammo", value: 90 },
		clip: { name: "Magazine Size", value: 6 },
		rate: { name: "Rate of Fire", value: 1.6 },
		reload: { name: "Reload Time", value: 2 },
		ex1: { name: "Pellets", value: 8 },
		ex2: { name: "Stun Duration", value: 2.0 },
		ex3: { name: "Weakpoint Stun Chance", value: 10, percent: true },
		ex4: { name: "Recoil", value: 100, percent: true },
		ex5: { name: "Base Spread", value: 100, percent: true },
		ex6: { name: "Armor Break Bonus", value: 0, percent: true },
		ex7: { name: "Turret Whip", value: 0, boolean: true },
		ex8: { name: "Automatic Fire", value: 0, boolean: true }
	},
	mods: [
		[
			{
				selected: false,
				name: "Supercharged Feed Mechanism",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text:
					"We overclocked your gun. It fires faster. Don't ask, just enjoy. Also probably don't tell Management, please.",
				stats: {
					rate: { name: "Rate of Fire", value: 0.8 }
				},
				cost: {
					credits: 1200,
					bismor: 25,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Overstuffed Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "CLip size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 2 }
				},
				cost: {
					credits: 1200,
					bismor: 0,
					croppa: 0,
					enorPearl: 25,
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
				name: "Expanded Ammo Bags",
				icon: "Icon_Upgrade_Ammo",
				type: "Total Ammo",
				text: "You had to give up some sandwich-storage, but your total ammo capacity is increased!",
				stats: {
					ammo: { name: "Max Ammo", value: 40 }
				},
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 0,
					enorPearl: 15,
					jadiz: 0,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Loaded Shells",
				icon: "Icon_Upgrade_Shotgun_Pellet",
				type: "Pellet Count",
				text: "More pellets in each shell",
				stats: {
					ex1: { name: "Pellets", value: 2 }
				},
				cost: {
					credits: 2000,
					bismor: 0,
					croppa: 0,
					enorPearl: 15,
					jadiz: 24,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Choke",
				icon: "Icon_Upgrade_Accuracy",
				type: "Accuracy",
				text: "Decreased shot spread",
				stats: {
					ex5: { name: "Base Spread", value: 50, percent: true, subtract: true }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 0,
					magnite: 50,
					umanite: 35,
					err: 0
				}
			}
		],
		[
			{
				selected: false,
				name: "Recoil Dampener",
				icon: "Icon_Upgrade_Recoil",
				type: "Recoil",
				text:
					"Quality engineering, the best lasercut parts, the tender loving care of a dedicated R&D Department, The recoil of your gun is drastically reduced.",
				stats: {
					ex4: { name: "Recoil", value: 60, percent: true, subtract: true }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 35,
					enorPearl: 0,
					jadiz: 50,
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
					'Experience, training, and a couple of under-the-table "adjustments" means your gun can be reloaded significantly faster.',
				stats: {
					reload: { name: "Reload Time", value: 0.5, subtract: true }
				},
				cost: {
					credits: 2800,
					bismor: 0,
					croppa: 0,
					enorPearl: 50,
					jadiz: 0,
					magnite: 35,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "High Capacity Magazine",
				icon: "Icon_Upgrade_ClipSize",
				type: "Magazine Size",
				text: "The good thing about clips, magazines, ammo drums, fuel tanks... You can always get bigger variants.",
				stats: {
					clip: { name: "Magazine Size", value: 3 }
				},
				cost: {
					credits: 2000,
					bismor: 24,
					croppa: 0,
					enorPearl: 15,
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
				name: "Tungsten Coated Buckshot",
				icon: "Icon_Upgrade_ArmorBreaking",
				type: "Armor Breaking",
				text:
					"We're proud of this one. Armor shredding. Tear through that high-impact plating of those big buggers like butter. What could be finer?",
				stats: {
					ex6: { name: "Armor Break Bonus", value: 400, percent: true }
				},
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 50,
					jadiz: 72,
					magnite: 48,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Improved Stun",
				icon: "Icon_Upgrade_Stun",
				type: "Stun",
				text: "Stun enemies more often and for a longer time!",
				stats: {
					ex2: { name: "Stun Duration", value: 1 },
					ex3: { name: "Weakpoint Stun Chance", value: 20, percent: true }
				},
				cost: {
					credits: 4800,
					bismor: 0,
					croppa: 0,
					enorPearl: 0,
					jadiz: 72,
					magnite: 50,
					umanite: 48,
					err: 0
				}
			},
			{
				selected: false,
				name: "Bigger Pellets",
				icon: "Icon_Upgrade_DamageGeneral",
				type: "Damage",
				text: "The good folk in R&D have been busy. The overall damage of your weapon is increased.",
				stats: {
					dmg: { name: "Damage", value: 2 }
				},
				cost: {
					credits: 4800,
					bismor: 72,
					croppa: 48,
					enorPearl: 50,
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
				name: "Turret Whip",
				icon: "Icon_Upgrade_Special",
				type: "Special",
				text: "Shoot your turrets to make them create an overcharged shot",
				stats: {
					ex7: { name: "Turret Whip", value: 1, boolean: true }
				},
				cost: {
					credits: 5600,
					bismor: 0,
					croppa: 64,
					enorPearl: 70,
					jadiz: 140,
					magnite: 0,
					umanite: 0,
					err: 0
				}
			},
			{
				selected: false,
				name: "Miner Adjustments",
				icon: "Icon_Upgrade_FireRate",
				type: "Rate of Fire",
				text: "Fully automatic with an increased rate of fire",
				stats: {
					rate: { name: "Rate of Fire", value: 1.2 },
					ex8: { name: "Automatic Fire", value: 1, boolean: true }
				},
				cost: {
					credits: 5600,
					bismor: 70,
					croppa: 140,
					enorPearl: 0,
					jadiz: 0,
					magnite: 64,
					umanite: 0,
					err: 0
				}
			}
		]
	],
	/* todo: magnetic pellet alignment overclock changed with update 26 */
	overclocks: [
		{
			selected: false,
			name: "Compact Shells",
			icon: "Icon_Upgrade_ClipSize",
			type: "clean",
			cost: {
				credits: 7350,
				bismor: 100,
				croppa: 0,
				enorPearl: 0,
				jadiz: 135,
				magnite: 60,
				umanite: 0,
				err: 0
			},
			text: "Using these shells expands magazine capacity slightly and the weapon can fire them faster!",
			stats: {
				clip: { name: "Magazine Size", value: 1 },
				rate: { name: "Rate of Fire", value: 0.4 },
			}
		},
		{
			selected: false,
			name: "Light-Weight Magazines",
			icon: "Icon_Upgrade_Ammo",
			type: "clean",
			cost: {
				credits: 7250,
				bismor: 0,
				croppa: 125,
				enorPearl: 0,
				jadiz: 0,
				magnite: 105,
				umanite: 60,
				err: 0
			},
			text: "It's amazing how much material can be removed without affecting anything and lighter magazines means more magazines and faster reloading.",
			stats: {
				ammo: { name: "Max Ammo", value: 20 },
				reload: { name: "Reload Time", value: 0.2, subtract: true },
			}
		},
		{
			selected: false,
			name: "Magnetic Pellet Alignment",
			icon: "Icon_Upgrade_Aim",
			type: "balanced",
			cost: {
				credits: 7900,
				bismor: 0,
				croppa: 0,
				enorPearl: 120,
				jadiz: 105,
				magnite: 0,
				umanite: 75,
				err: 0
			},
			text: "Electromagnets in the chamber help reduce shot spread at the cost of a reduced rate of fire and magazine capacity.",
			stats: {
				ex5: { name: "Base Spread", value: 0.5, percent: true, multiply: true },
				clip: { name: "Magazine Size", value: 2, subtract: true },
				rate: { name: "Rate of Fire", value: 0.4, subtract: true },
			}
		},
		{
			selected: false,
			name: "Cycle Overload",
			icon: "Icon_Upgrade_FireRate",
			type: "unstable",
			cost: {
				credits: 8050,
				bismor: 125,
				croppa: 100,
				enorPearl: 0,
				jadiz: 0,
				magnite: 0,
				umanite: 80,
				err: 0
			},
			text: "Heavy modification to the chamber greatly increases the maximum rate of fire but reduces the weapon's accuracy and reload speed as a consequence.",
			stats: {
				dmg: { name: "Damage", value: 1 },
				rate: { name: "Rate of Fire", value: 2 },
				reload: { name: "Reload Time", value: 0.5 },
				ex5: { name: "Base Spread", value: 2, percent: true, multiply: true },
			}
		},
		{
			selected: false,
			name: "Mini Shells",
			icon: "Icon_Overclock_SmallBullets",
			type: "unstable",
			cost: {
				credits: 7700,
				bismor: 0,
				croppa: 125,
				enorPearl: 65,
				jadiz: 0,
				magnite: 90,
				umanite: 0,
				err: 0
			},
			text: "Smaller shells designed around a new charge type reduce recoil and increase overall ammo and magazine capacity at the cost of raw damage.",
			stats: {
				ammo: { name: "Max Ammo", value: 90 },
				clip: { name: "Magazine Size", value: 6 },
				ex4: { name: "Recoil", value: 0.5, percent: true, multiply: true },
				dmg: { name: "Damage", value: 2, subtract: true },
			}
		},
	]
};
