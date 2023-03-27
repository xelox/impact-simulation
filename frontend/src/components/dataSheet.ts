export const dataSheet = {
    artifactsPerDomain: 1.065,
    mainStatLvlTable: {
        HP:             [717, 	920, 	1_123, 	1_326, 	1_530, 	1_733, 	1_936, 	2_139, 	2_342, 	2_545, 	2_749, 	2_952, 	3_155, 	3_358, 	3_561, 	3_764, 	3_967, 	4_171, 	4_374, 	4_577, 	4_780,  ],
        ATK: 	        [47, 	60, 	73, 	86, 	100, 	113, 	126, 	139, 	152, 	166, 	179, 	192, 	205, 	219, 	232, 	245, 	258, 	272, 	285, 	298, 	311     ],
        'HP%': 	        [7.0, 	9.0, 	11.0, 	12.9, 	14.9, 	16.9,	18.9, 	20.9, 	22.8, 	24.8, 	26.8, 	28.8, 	30.8, 	32.8, 	34.7, 	36.7, 	38.7, 	40.7, 	42.7, 	44.6, 	46.6,   ],
        'ATK%': 	    [7.0, 	9.0, 	11.0, 	12.9, 	14.9, 	16.9, 	18.9, 	20.9, 	22.8, 	24.8, 	26.8, 	28.8, 	30.8, 	32.8, 	34.7, 	36.7, 	38.7, 	40.7, 	42.7, 	44.6, 	46.6,   ],
        'DEF%': 	    [8.7, 	11.2, 	13.7, 	16.2, 	18.6, 	21.1, 	23.6, 	26.1, 	28.6, 	31, 	33.5, 	36, 	38.5, 	40.9, 	43.4, 	45.9, 	48.4, 	50.8, 	53.3, 	55.8, 	58.3,   ],
        PHYSICAL:       [8.7, 	11.2, 	13.7, 	16.2, 	18.6, 	21.1, 	23.6, 	26.1, 	28.6, 	31, 	33.5, 	36, 	38.5, 	40.9, 	43.4, 	45.9, 	48.4, 	50.8, 	53.3, 	55.8, 	58.3,   ],
        ELEMENTAL_DMG:  [7.0, 	9.0, 	11.0, 	12.9, 	14.9, 	16.9, 	18.9, 	20.9, 	22.8, 	24.8, 	26.8, 	28.8, 	30.8, 	32.8, 	34.7, 	36.7, 	38.7, 	40.7, 	42.7, 	44.6, 	46.6,   ],
        EM:             [28.0, 	35.9, 	43.8, 	51.8, 	59.7, 	67.6, 	75.5, 	83.5, 	91.4, 	99.3, 	107.2, 	115.2, 	123.1, 	131.0, 	138.9, 	146.9, 	154.8, 	162.7, 	170.6, 	178.6, 	186.5   ],
        ER:             [7.8, 	10.0, 	12.2, 	14.4, 	16.6, 	18.8, 	21.0, 	23.2, 	25.4, 	27.6, 	29.8, 	32.0, 	34.2, 	36.4, 	38.6, 	40.8, 	43.0, 	45.2, 	47.4, 	49.6, 	51.8,   ],
        CRIT_RATE:      [4.7, 	6.0, 	7.3, 	8.6, 	9.9, 	11.3, 	12.6, 	13.9, 	15.2, 	16.6, 	17.9, 	19.2, 	20.5, 	21.8, 	23.2, 	24.5, 	25.8, 	27.1, 	28.4, 	29.8, 	31.1,   ],
        CRIT_DMG:       [9.3, 	12.0, 	14.6, 	17.3, 	19.9, 	22.5, 	25.2, 	27.8, 	30.5, 	33.1, 	35.7, 	38.4, 	41.0, 	43.7, 	46.3, 	49.0, 	51.6, 	54.2, 	56.9, 	59.6, 	62.2,   ],
        HEALING:        [5.4, 	6.9, 	8.4, 	10.0, 	11.5, 	13.0, 	14.5, 	16.1, 	17.6, 	19.1, 	20.6, 	22.1, 	23.7, 	25.2, 	26.7, 	28.2, 	29.8, 	31.3, 	32.8, 	34.3, 	35.9,   ],
    },
    mainstatsChanceWeights: {
        Sands: {
            'HP%':      0.2668,
            'ATK%':     0.2666,
            'DEF%':     0.2666,
            ER:         0.1,
            EN:         0.1,
        },
        Goblet: {
            'HP%':      0.1925,
            'ATK%':     0.1925,
            'DEF%':     0.19,
            PYRO:       0.05,
            ELECTRO:    0.05,
            CRYO:       0.05,
            HYDRO:      0.05,
            DENDRO:     0.05,
            ANEMO:      0.05,
            GEO:        0.05,
            PHYSICAL:   0.05,
            EM:         0.025,
        },
        Circlet: {
            'HP%':      0.22,
            'ATK%':     0.22,
            'DEF%':     0.22,
            CRIT_DMG:   0.1,
            CRIT_RATE:  0.1,
            HEALING:    0.1,
            EM:         0.04,
        }
    },
    substatsChanceWeights: {
        Flower: {
            HP:         0.1579,
            ATK:        0.1579,
            DEF:        0.1579,
            'HP%':      0.1053,
            'ATK%':	    0.1053,
            'DEF%': 	0.1053,
            ER: 	    0.1053,
            EM: 	    0.1053,
            CRIT_RATE: 	0.0789,
            CRIT_DMG: 	0.0789 
        },
        Plume: {
            HP:         0.1579,
            ATK:        0.1579,
            DEF:        0.1579,
            'HP%':      0.1053,
            'ATK%':	    0.1053,
            'DEF%': 	0.1053,
            ER: 	    0.1053,
            EM: 	    0.1053,
            CRIT_RATE: 	0.0789,
            CRIT_DMG: 	0.0789 
        },
        Sands:{
            HP: 	    0.1500,
            ATK:	    0.1500,
            DEF: 	    0.1500,
            'HP%': 	    0.1000,
            'ATK%': 	0.1000,
            'DEF%': 	0.1000,
            ER: 	    0.1000,
            EM: 	    0.1000,
            CRIT_RATE: 	0.0750,
            CRIT_DMG:	0.0750, 
        },
        Goblet: {
            HP: 	    0.1500,
            ATK: 	    0.1500,
            DEF: 	    0.1500,
            'HP%': 	    0.1000,
            'ATK%': 	0.1000,
            'DEF%': 	0.1000,
            ER: 	    0.1000,
            EM: 	    0.1000,
            CRIT_RATE: 	0.0750,
            CRIT_DMG: 	0.0750,
        },
        Circlet: {
            HP: 	    0.1500,
            ATK: 	    0.1500,
            DEF: 	    0.1500,
            'HP%': 	    0.1000,
            'ATK%': 	0.1000,
            'DEF%': 	0.1000,
            ER: 	    0.1000,
            EM: 	    0.1000,
            CRIT_RATE:  0.0750,
            CRIT_DMG:   0.0750, 
        }
    },

    upgradeValues: {
        HP:         [209.13,    239.00, 268.88, 298.75],
        ATK:        [13.62,     15.56,  17.51,  19.45],
        DEF:        [16.20,     18.52,  20.83,  23.15],
        'HP%':      [4.08,      4.66,   5.25,   5.83],
        'ATK%':     [4.08,      4.66,   5.25,   5.83],
        'DEF%':     [5.10,      5.83,   6.56,   7.29],
        EM:         [16.32,     18.65,  20.98,  23.31],
        ER:         [4.53,      5.18,   5.83,   6.48],
        CRIT_RATE:  [2.72,      3.11,   3.50,   3.89],
        CRIT_DMG:   [5.44,      6.22,   6.99,   7.77],
    },

    fourStartingSubstatsChance: 0.2,
    artifactPieceTypes: ['Flower', 'Plume', 'Sands', 'Goblet', 'Circlet'],

    domains: {
        dropRates:{
            pre22: null,
            pre25:{
                3: 2.15,
                4: 0,
                5: 0,
            },
            pre30:{
                3: 4.81,
                4: 0,
                5: 0
            },
            pre35:{
                3: 6.43,
                4: 0.70,
                5: 0,
            },
            pre40:{
                3: 5.81,
                4: 1.38,
                5: 0,
            },
            pre45:{
                3: 4.98,
                4: 1.78,
                5: 0.38
            },
            max:{
                3: 3.55,
                4: 2.48,
                5: 1.07,
            },
        },

        domainsInfo:{
            'City of Gold':{
                name: 'City of Gold',
                img: './genshin-assets/other/domains/Domain_City_of_Gold.png',
                artifactSets: {
                    3: ['Resolution of Sojourner', 'Brave Heart'],
                    4: ['Resolution of Sojourner', 'Brave Heart', 'Desert Pavilion Chronicle', 'Flower of Paradise Lost'],
                    5: ['Desert Pavilion Chronicle', 'Flower of Paradise Lost'],
                }
            },
            'Domain of Guyun':{
                name: 'Domain of Guyun',
                img: './genshin-assets/other/domains/Domain_of_Guyun.png',
                artifactSets: {
                    3: ['Lucky Dog', 'Brave Heart'],
                    4: ['Lucky Dog', 'Brave Heart', 'Archaic Petra', 'Retracing Bolide'],
                    5: ['Archaic Petra', 'Retracing Bolide'],
                }
            },
            'Midsummer Courtyard':{
                name: 'Midsummer Courtyard',
                img: './genshin-assets/other/domains/Domain_Midsummer_Courtyard.png',
                artifactSets: {
                    3: ['Adventurer', 'Resolution of Sojourner'],
                    4: ['Adventurer', 'Resolution of Sojourner', 'Thundering Fury', 'Thundersoother'],
                    5: ['Thundering Fury', 'Thundersoother'],
                }
            },
            'Valley of Remembrance':{
                name: 'Valley of Remembrance',
                img: './genshin-assets/other/domains/Domain_Valley_of_Remembrance.png',
                artifactSets: {
                    3: ['Traveling Doctor', 'Tiny Miracle'],
                    4: ['Traveling Doctor', 'Tiny Miracle', 'Viridescent Venerer', 'Maiden Beloved'],
                    5: ['Viridescent Venerer', 'Maiden Beloved'],
                }
            },
            'Hidden Palace of Zhou Formula':{
                name: 'Hidden Palace of Zhou Formula',
                img: './genshin-assets/other/domains/Domain_Hidden_Palace_of_Zhou_Formula.png',
                artifactSets: {
                    3: ["Defender's Will", 'Martial Artist'],
                    4: ["Defender's Will", 'Martial Artist', 'Crimson Witch of Flames', 'Lavawalker'],
                    5: ['Crimson Witch of Flames', 'Lavawalker'],
                }
            },
            'Momiji-Dyed Court':{
                name: 'Momiji-Dyed Court',
                img: './genshin-assets/other/domains/Domain_Momiji-Dyed_Court.png',
                artifactSets: {
                    3: ["Resolution of Sojourner", 'Tiny Miracle'],
                    4: ["Resolution of Sojourner", 'Tiny Miracle', "Shimenawa's Reminiscence", 'Emblem of Severed Fate'],
                    5: ["Shimenawa's Reminiscence", 'Emblem of Severed Fate'],
                }
            },
            'Peak of Vindagnyr':{
                name: 'Peak of Vindagnyr',
                img: './genshin-assets/other/domains/Peak_of_Vindagnyr.png',
                artifactSets: {
                    3: ["Defender's Will", 'Gambler'],
                    4: ["Defender's Will", 'Gambler', "Blizzard Strayer", 'Heart of Depth'],
                    5: ["Blizzard Strayer", 'Heart of Depth'],
                },
            },
            'Ridge Watch':{
                name: 'Ridge Watch',
                img: './genshin-assets/other/domains/Domain_Ridge_Watch.png',
                artifactSets: {
                    3: ["Brave Heart", 'Martial Artist'],
                    4: ["Brave Heart", 'Martial Artist', "Tenacity of the Millelith", 'Pale Flame'],
                    5: ["Tenacity of the Millelith", 'Pale Flame'],
                },
            },
            "Slumbering Court":{
                name: "Slumbering Court",
                img: './genshin-assets/other/domains/Domain_Momiji-Dyed_Court.png',
                artifactSets: {
                    3: ["Defender's Will", 'Brave Heart'],
                    4: ["Defender's Will", 'Brave Heart', "Husk of Opulent Dreams", 'Ocean-Hued Clam'],
                    5: ["Husk of Opulent Dreams", 'Ocean-Hued Clam'],
                },
            },
            "Spire of Solitary Enlightenment":{
                name: "Spire of Solitary Enlightenment",
                img: './genshin-assets/other/domains/Domain_Spire_of_Solitary_Enlightenment.png',
                artifactSets: {
                    3: ["Tiny Miracle", 'Gambler'],
                    4: ["Tiny Miracle", 'Gambler', "Deepwood Memories", 'Gilded Dreams'],
                    5: ["Deepwood Memories", 'Gilded Dreams'],
                },
            },
            "The Lost Valley":{
                name: "The Lost Valley",
                img: './genshin-assets/other/domains/Domain_The_Lost_Valley.png',
                artifactSets: {
                    3: ["Martial Artist", 'Gambler'],
                    4: ["Martial Artist", 'Gambler', "Vermillion Hereafter", 'Echoes of an Offering'],
                    5: ["Vermillion Hereafter", 'Echoes of an Offering'],
                },
            },
            "Clear Pool and Mountain Cavern":{
                name: "Clear Pool and Mountain Cavern",
                img: './genshin-assets/other/domains/Domain_Clear_Pool_and_Mountain_Cavern.png',
                artifactSets: {
                    3: ["Gambler", 'Scholar'],
                    4: ["Gambler", 'Scholar', "Bloodstained Chivalry", "Noblesse Oblige"],
                    5: ["Bloodstained Chivalry", "Noblesse Oblige"],
                },
            }
        },
    },
    setsDescription:{
        "Initiate": "",
        "Adventurer": {
            '2 Piece': "Max HP increased by 1,000.",
            '4 Piece': "Opening a chest regenerates 30% Max HP over 5s. "
        },
        "Lucky Dog": {
            '2 Piece': "DEF increased by 100.",
            '4 Piece': "Picking up Mora restores 300 HP."
        },
        "Traveling Doctor": {
            '2 Piece': "Increases incoming healing by 20%.",
            '4 Piece': "Using Elemental Burst restores 20% HP."
        },
        "Resolution of Sojourner": {
            '2 Piece': "ATK +18%",
            '4 Piece': "Increases Charged Attack CRIT Rate by 30%."
        },
        "Tiny Miracle": {
            '2 Piece': "All Elemental RES increased by 20%.",
            '4 Piece': "Incoming Elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s."
        },
        "Berserker": {
            '2 Piece': "CRIT Rate +12%",
            '4 Piece': "When HP is below 70%, CRIT Rate increases by an additional 24%."
        },
        "Instructor": {
            '2 Piece': "Increases Elemental Mastery by 80.",
            '4 Piece': "Upon triggering an Elemental Reaction, increases all party members' Elemental Mastery by 120 for 8s."
        },
        "The Exile": {
            '2 Piece': "Energy Recharge +20%",
            '4 Piece': "Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack."
        },
        "Defender's Will": {
            '2 Piece': "DEF +30%",
            '4 Piece': "For each different element present in your own party, the wearer's Elemental RES to that corresponding element is increased by 30%."
        },
        "Brave Heart": {
            '2 Piece': "ATK +18%.",
            '4 Piece': "Increases DMG by 30% against opponents with more than 50% HP."
        },
        "Martial Artist": {
            '2 Piece': "Increases Normal Attack and Charged Attack DMG by 15%.",
            '4 Piece': "After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s."
        },
        "Gambler": {
            '2 Piece': "Increases Elemental Skill DMG by 20%.",
            '4 Piece': "Defeating an opponent has 100% chance to remove Elemental Skill CD. Can only occur once every 15s."
        },
        "Scholar": {
            '2 Piece': "Energy Recharge +20%",
            '4 Piece': "Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s."
        },
        "Prayers for Wisdom": {
            '2 Piece': "1 Piece: Affected by Electro for 40% less time.",
        },
        "Prayers for Destiny": {
            '2 Piece': "Affected by Hydro for 40% less time.",
        },
        "Prayers for Illumination": {
            '2 Piece': "Affected by Pyro for 40% less time.",
        },
        "Prayers to Springtime": {
            '2 Piece': "Affected by Cryo for 40% less time. ",
        },
        "Gladiator's Finale": {
            '2 Piece': "ATK +18%.",
            '4 Piece': "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%."
        },
        "Wanderer's Troupe": {
            '2 Piece': "Increases Elemental Mastery by 80.",
            '4 Piece': "Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow."
        },
        "Noblesse Oblige": {
            '2 Piece': "Elemental Burst DMG +20%",
            '4 Piece': "Using an Elemental Burst increases all party members' ATK by 20% for 12s. This effect cannot stack."
        },
        "Bloodstained Chivalry": {
            '2 Piece': "Physical DMG Bonus +25%",
            '4 Piece': "After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s. Also triggers with wild animals such as boars, squirrels and frogs."
        },
        "Maiden Beloved": {
            '2 Piece': "Character Healing Effectiveness +15%",
            '4 Piece': "Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s."
        },
        "Viridescent Venerer": {
            '2 Piece': "Anemo DMG Bonus +15%",
            '4 Piece': "Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s."
        },
        "Archaic Petra": {
            '2 Piece': "Geo DMG Bonus +15%",
            '4 Piece': "Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time."
        },
        "Retracing Bolide": {
            '2 Piece': "Increases Shield Strength by 35%.",
            '4 Piece': "While protected by a shield, gain an additional 40% Normal and Charged Attack DMG."
        },
        "Thundersoother": {
            '2 Piece': "Electro RES increased by 40%.",
            '4 Piece': "Increases DMG against opponents affected by Electro by 35%. "
        },
        "Thundering Fury": {
            '2 Piece': "Electro DMG Bonus +15%",
            '4 Piece': "Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s."
        },
        "Lavawalker": {
            '2 Piece': "Pyro RES increased by 40%.",
            '4 Piece': "Increases DMG against opponents affected by Pyro by 35%."
        },
        "Crimson Witch of Flames": {
            '2 Piece': "Pyro DMG Bonus +15%",
            '4 Piece': "Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks."
        },
        "Blizzard Strayer": {
            '2 Piece': "Cryo DMG Bonus +15%",
            '4 Piece': "When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%."
        },
        "Heart of Depth": {
            '2 Piece': "Hydro DMG Bonus +15%",
            '4 Piece': "After using an Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s."
        },
        "Tenacity of the Millelith": {
            '2 Piece': "HP +20%",
            '4 Piece': "When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field."
        },
        "Pale Flame": {
            '2 Piece': "Physical DMG Bonus +25%",
            '4 Piece': "When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%."
        },
        "Shimenawa's Reminiscence": {
            '2 Piece': "ATK +18%",
            '4 Piece': "When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration."
        },
        "Emblem of Severed Fate": {
            '2 Piece': "Energy Recharge +20%",
            '4 Piece': "Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way."
        },
        "Husk of Opulent Dreams": {
            '2 Piece': "DEF +30%",
            '4 Piece': "A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost."
        },
        "Ocean-Hued Clam": {
            '2 Piece': "Healing Bonus +15%.",
            '4 Piece': "When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field."
        },
        "Vermillion Hereafter": {
            '2 Piece': "ATK +18%.",
            '4 Piece': "After using an Elemental Burst. this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character's HP decreases, their ATK will further increase by 10%. This increase can occur this way maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled."
        },
        "Echoes of an Offering": {
            '2 Piece': "ATK +18%.",
            '4 Piece': "When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK. This effect will be dispelled 0.05s after a Normal Attack deals DMG. If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%. This trigger can occur once every 0.2s."
        },
        "Deepwood Memories": {
            '2 Piece': "Dendro DMG Bonus +15%",
            '4 Piece': "After Elemental Skills or Bursts hit opponents, the targets' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field."
        },
        "Gilded Dreams": {
            '2 Piece': "Elemental Mastery +80",
            '4 Piece': "Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members, ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field."
        },
        "Desert Pavilion Chronicle": {
            '2 Piece': "Anemo DMG Bonus +15%.",
            '4 Piece': "When Charged Attacks hit opponents, the equipping character's Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s."
        },
        "Flower of Paradise Lost": {
            '2 Piece': "Increases Elemental Mastery by 80.",
            '4 Piece': "The equipping character's Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%. Additionally, after the equipping character triggers Bloom, Hyperbloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field."
        },
    }
}