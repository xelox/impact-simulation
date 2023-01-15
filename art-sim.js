const artifactsPerDomain = 1.065;

MainStatValuesTablePerLvl = {
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
}

const MainStatsChancePool = {
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
}

const SubstatsChancePool = {
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
};

const UpgradeValues = {
    HP:         [209.13, 239.00, 268.88, 298.75],
    ATK:        [13.62, 15.56, 17.51, 19.45],
    DEF:        [16.20, 18.52, 20.83, 23.15],
    'HP%':      [4.08, 4.66, 5.25, 5.83],
    'ATK%':     [4.08, 4.66, 5.25, 5.83],
    'DEF%':     [5.10, 5.83, 6.56, 7.29],
    EM:         [16.32, 18.65, 20.98, 23.31],
    ER:         [4.53, 5.18, 5.83, 6.48],
    CRIT_RATE:  [2.72, 3.11, 3.50, 3.89],
    CRIT_DMG:   [5.44, 6.22, 6.99, 7.77],
}

const maxSubstatsCountChance = 0.2;



const types = ['Flower', 'Plume', 'Sands', 'Goblet', 'Circlet'];

class Substat{
    type = '/';
    value = 1;
}

class Artifact{
    lvl = 0;
    type = "/";
    mainStat = "/";
    substats = [];
    substatsOptions = {};
    CRIT_VAL = 0;

    constructor(){
        this.type = types[Math.floor(Math.random() * types.length)];
        if(this.type === 'Flower') this.mainStat = 'HP';
        else if(this.type === 'Plume') this.mainStat = 'ATK';
        else{
            const mainStatsOptions = MainStatsChancePool[this.type];
            const mainStatDice = Math.random();
            let mainStatOptionProgress = 0;
            for(const [option, chance] of Object.entries(mainStatsOptions)){
                mainStatOptionProgress += chance;
                if(mainStatDice <= mainStatOptionProgress){
                    this.mainStat = option; break;
                }
            }
        }

        const startingSubstatsCount = (Math.random() <= maxSubstatsCountChance) ? 4 : 3

        this.substatsOptions = {...SubstatsChancePool[this.type]};

        if(this.substatsOptions[this.mainStat]) this.removeSubStatOption(this.mainStat); 

        for(let i = 0; i < startingSubstatsCount; i++){
           this.addSubstat();
        }
    }

    removeSubStatOption = (optionName) => {
        delete this.substatsOptions[optionName];
    }
    addSubstat = () => {
        const newSubstat = new Substat();
        let maxNewSubstatDice = 0;
        for(const wieght of Object.values(this.substatsOptions)) maxNewSubstatDice += wieght;
        const substatDice = Math.random() * maxNewSubstatDice;
        let substatChoiceProgress = 0;
        for(const [option, chance] of Object.entries(this.substatsOptions)){
            substatChoiceProgress += chance;
            if(substatDice <= substatChoiceProgress){
                newSubstat.type = option;
                this.removeSubStatOption(option);
                break;
            }
        }
        if(Object.keys(UpgradeValues).includes(newSubstat.type))
            newSubstat.value = UpgradeValues[newSubstat.type][Math.floor(Math.random() * 4)];
        this.substats.push(newSubstat);
    }

    calcCritVal = () => {
        let critVal = 0;
        for(const substat of Object.values(this.substats)){
            if(substat.type === 'CRIT_RATE') critVal += substat.value * 2;
            else if(substat.type === 'CRIT_DMG') critVal += substat.value;
        }
        // if(this.mainStat === 'CRIT_RATE') critVal += MainStatValuesTablePerLvl['CRIT_RATE'][this.lvl] * 2;
        // else if(this.mainStat === 'CRIT_DMG') critVal += MainStatValuesTablePerLvl['CRIT_DMG'][this.lvl];
        return critVal;
    }

    lvlUpSubstat = () => {
        const substatSlotDice = Math.floor(Math.random() * 4)
        const selectedSubstat = this.substats[substatSlotDice];
        if(Object.keys(UpgradeValues).includes(selectedSubstat.type))
            selectedSubstat.value += UpgradeValues[selectedSubstat.type][Math.floor(Math.random() * 4)];
        else selectedSubstat.value++;
    }

    upgradeOnce = () => {
        this.lvl++;
        if(!(this.lvl % 4)){
            if(this.substats.length < 4){
                this.addSubstat();
            }
            else this.lvlUpSubstat();
        }
        this.CRIT_VAL = this.calcCritVal();
    }
    upgradeNTimes = (levels) => {
        while(levels){
            if(this.lvl === 20) break;
            levels--;
            this.upgradeOnce();
        }
    }

    serialized = () => {
        const serialSubstats = []
        for(const substat of this.substats){
            let val = substat.value.toFixed(2);
            if(substat.type.endsWith('%') || (['CRIT_RATE', 'CRIT_DMG'].includes(substat.type))) val += '%';
            serialSubstats.push({type: substat.type, value: val});
        }
        return {
            type: this.type, 
            mainStat: this.mainStat, 
            substats: serialSubstats, 
            CRIT_VAL: this.CRIT_VAL, 
            LVL: this.lvl
        };
    }

    print = () => {

        const serialSubstats = {}
        for(const substat of this.substats){
            let val = substat.value.toFixed(2);
            if(substat.type.endsWith('%') || (['CRIT_RATE', 'CRIT_DMG'].includes(substat.type))) val += '%';
            serialSubstats[substat.type] = val;
        }

        console.table({Info: {
            'Type': this.type,
            'Main Stat': this.mainStat,
            'CRIT Value': this.CRIT_VAL.toFixed(2) + '%',
        }});
        console.table({Substats: serialSubstats})
    }
}

// process.stdin.on('data', e=>{
//     console.clear();
//    const artifact = new Artifact();
//    artifact.upgradeNTimes(20);
//    console.log(artifact.serialized());
// });

// let totalArtifactsCreated = 1;

// for(let i = 0; i < 100; i++){
//     let artifact = new Artifact();
//     artifact.upgradeNTimes(20);


//     while(artifact.CRIT_VAL < 40){
//         totalArtifactsCreated++;
//         console.clear();
//         artifact = new Artifact()
//         artifact.upgradeNTimes(20);
        
//     }
// }

// console.log((100 / totalArtifactsCreated) * 100);





class FarmSim{

    bestSingleArtifactSoFar = {
        artifact: null,
        value: 0,
    };
    
    bestTen = [];

    expPull = 0;
    potentialPull = {
        Flower: [],
        Plume: [],
        Sands: [],
        Goblet: [],
        Circle: [],
    }
    offSetPotential = [];
    maxedArtifacts = [];

    bestSetSoFar = {
        flower: null,
        plume: null,
        sands: null,
        goblet: null,
        circlet: null,
    }

    defaultMainstatValue = {
        'ATK%': 0.8,
        EM: 0.6,
        ER:0.6,
        'HP%':0.3,
        'DEF%':0.3,
        CRIT_RATE:1,
        CRIT_DMG:1,
        HEALING:0.2,
        PYRO: 1.2,
        ELECTRO: 1.2,
        CRYO: 1.2,
        HYDRO: 1.2,
        DENDRO: 0.7,
        ANEMO: 0.6,
        GEO: 0.6, 
        PHYSICAL: 0.5,
        HP: 1.8,
        ATK: 1.8,
    }

    target = {
        CRIT_VAL: 0,
        ATKP: 0,
        ER: 0,
        EM: 0,
        preffered:{
            Goblet: ['ELECTRO'],
            Sands: ['ATK%',],
            Circlet: ['CRIT_DMG', 'CRIT_RATE'],
            Substats: [],
        }
    }
    constructor(){

    }

    farm180Resin = () => {
        const newArtifacts = [];
        for(let i = 0; i < 9; i++){
            let artifactsObtainedThisRun = (Math.random() <= (artifactsPerDomain - 1)) ? 2 : 1;
            for(let j = 0; j < artifactsObtainedThisRun; j++){
                const currNewArtifact = new Artifact();
                currNewArtifact.upgradeNTimes(20);
                newArtifacts.push(currNewArtifact);
            }
            
        }
        return newArtifacts;
    }

    evaluateArtifact = (artifact) => {
        let overallValue = 0;

        overallValue += this.defaultMainstatValue[artifact.mainStat] * 0.68;
        if(['Goblet', 'Sands', 'Circlet'].includes(artifact.type)){
            if(this.target.preffered[artifact.type].includes(artifact.mainStat)) {
                overallValue += 1;
            }
        }
        
        overallValue += (artifact.CRIT_VAL / 46.62) * 1.43;

        return overallValue;
    }

    runOneDayWorth = () => {
        const newArtifacts = this.farm180Resin();
        for(const artifact of newArtifacts){
            const value = this.evaluateArtifact(artifact);
            if(this.bestSingleArtifactSoFar.value < value){
                this.bestSingleArtifactSoFar.value = value;
                this.bestSingleArtifactSoFar.artifact = artifact;
            }
        }
    }

    displayCurrentSet = () => {
        console.log(this.bestSetSoFar);
    }
}

const simulator = new FarmSim();

let months = 0;

process.stdin.on('data', e=>{
    months++;
    console.clear();
    console.log('So far you grinded for', months, 'Months!!');
    for(let i = 0; i < 30; i++){
        simulator.runOneDayWorth();
    }
   simulator.bestSingleArtifactSoFar.artifact.print();
   simulator.bestSingleArtifactSoFar = {artifact: null, value: 0}
})
