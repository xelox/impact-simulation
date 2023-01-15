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

        
    }
}