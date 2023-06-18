import { dataSheet } from "../dataSheet";

export class Substat{
    type = '/';
    value = 1;
}

export class Artifact{
    private _exp = 0;
    private _lvl = 0;
    private _setName = '/';
    private _pieceType = "/";
    private _mainstatType = "/";
    private _mainstatValue = 0;
    private _substats = [];
    private _substatsOptions = {};
    private _rarity = 0;

    constructor(setOptions: [], rarity: number){
        this._rarity = rarity;
        //randomly select piece set from {setOptions}
        this._setName = setOptions[Math.floor(Math.random() * setOptions.length)];

        //randomly selecting the piece type (every option has equal probaility)
        this._pieceType = dataSheet.artifactPieceTypes[Math.floor(Math.random() * dataSheet.artifactPieceTypes.length)];
        //if the sleceted piece type is 'Flower' or 'Plume' then assign the associated mainstat, else randomly select mainstat
        if(this._pieceType === 'Flower') this._mainstatType = 'HP';
        else if(this._pieceType === 'Plume') this._mainstatType = 'ATK';
        else{
            //obtain the mainstat options based ont the artifact piece type
            const mainStatsOptions = dataSheet.mainstatsChanceWeights[this._pieceType];
            //chances of each possible mainstat have different weights, so we first calc the {max_dice_roll}
            let mainStatsOptionsMaxDice = 0;
            for(const chance of Object.values<number>(mainStatsOptions)) mainStatsOptionsMaxDice += chance;
            //then we get a random (0.0 - 1.0) dice and we map it to the {max_dice_roll}
            const mainStatDice = Math.random() * mainStatsOptionsMaxDice;
            //we then start adding up all the individual chances into {mainStatOptionChecked} that keeps track of the progress 
            let mainStatOptionChecked = 0;
            for(const [option, chance] of Object.entries<number>(mainStatsOptions)){
                if(option === 'EN') alert(JSON.stringify(mainStatsOptions));
                mainStatOptionChecked += chance;
                if(mainStatDice <= mainStatOptionChecked){
                    this._mainstatType = option; break; //{mainStatOptionChecked} finally reached up to the diece so {option} is the mainstat option
                }
            }
        }
        //now we can set the {mainstatValue} at based on the artifact current {this.lvl} (0) and the correct lookup table from {dataSheet.mainStatLvlTable}
        const mainstatTypeForValue = (['PYRO','ELECTRO','CRYO','HYDRO','DENDRO','ANEMO','GEO'].includes(this._mainstatType)) ? 'ELEMENTAL_DMG' : this._mainstatType;
        this._mainstatValue = dataSheet.mainStatLvlTable[mainstatTypeForValue][this._lvl];

        //now we decide how many starting substats to create for the artifact at lvl 0. 
        //these is decided based on the given chance {dataSheet.fourStartingSubstatsChance} of starting with 4 substats.
        const startingSubstatsCount = (Math.random() <= dataSheet.fourStartingSubstatsChance) ? 4 : 3

        //then we create a (copy) of the substats options chances based on the artifact piece type.
        //these object is persisted on the artifact object {this.substatsOptions} so that it can be further used and modified when reaching lvl 4
        //(when a substat is pulled from the chances pull it needs to be removed from the object {this.substatsOptions} it so that it wont be used multiple times) 
        this._substatsOptions = {...dataSheet.substatsChanceWeights[this._pieceType]};

        //now we remove from the mainstat from the possible substats 
        if(this._substatsOptions[this._mainstatType]) delete this._substatsOptions[this._mainstatType]; 

        //we add initial substats as many times as it's indicated by {startingSubstatsCount}
        for(let i = 0; i < startingSubstatsCount; i++){
           this.addSubstat();
        }
    }

    /**
     * Adds a new substat to the artifact
     */
    private addSubstat = () => {
        //{newSubstat} it's the substat object that will be added to {this.substats[]}
        const newSubstat = new Substat();


        //Step 1 of 3: select substat type:

        //{maxNewSubstatDice} will hold the maximum value of the diece used to chose the type of substat
        let maxNewSubstatDice = 0;
        for(const chance of Object.values<number>(this._substatsOptions)) maxNewSubstatDice += chance;
        //the diced is rolled, mapped to {maxNewSubstatDice} and then assigned to {substatDice}
        const substatDice = Math.random() * maxNewSubstatDice;
        //{substatChoiceCheck} keeps track of the dice progress in checking what substat from the options matches the dice.
        let substatChoiceCheck = 0;
        for(const [option, chance] of Object.entries<number>(this._substatsOptions)){
            substatChoiceCheck += chance;
            //if the current value of {substatChoiceCheck} satisfies the dice, then assign {option} to {newSubstat.type} and delete that option from the pull
            if(substatDice <= substatChoiceCheck){
                newSubstat.type = option;
                delete this._substatsOptions[option];
                break;
            }
        }
        //Step 2 of 3: chose a random starting value for the {newSubstat.value} based on a random (0 - 3) dice, from the {dataSheet.upgradeValues} lookup table.
        newSubstat.value = dataSheet.upgradeValues[newSubstat.type][Math.floor(Math.random() * 4)];

        //Step 3 of 3: push {newSubstat} to {this.substats[]} array;
        this._substats.push(newSubstat);
    }

    /**
     * calculates the total CRIT value (only substats)
     * @returns CRIT value of the artifact ~(0.0 - 54.6)
     */
    private calcCritVal = () => {
        let critVal = 0;
        for(const substat of Object.values(this._substats)){
            if(substat.type === 'CRIT_RATE') critVal += substat.value * 2;
            else if(substat.type === 'CRIT_DMG') critVal += substat.value;
        }
        // if(this.mainStat === 'CRIT_RATE') critVal += MainStatValuesTablePerLvl['CRIT_RATE'][this.lvl] * 2;
        // else if(this.mainStat === 'CRIT_DMG') critVal += MainStatValuesTablePerLvl['CRIT_DMG'][this.lvl];
        return critVal;
    }

    /**
     * randomly choses any substat slot of the artifact and upgrades it's value with a new random value from the {dataSheet.upgradeValues} table
     */
    private upgradeRandomSubstat = () => {
        const substatSlotDice = Math.floor(Math.random() * this._substats.length)
        const selectedSubstat = this._substats[substatSlotDice];
        const upgradeValueDice = Math.floor(Math.random() * 4);
        const selectedUpgradeTable = dataSheet.upgradeValues[selectedSubstat.type];
        const newUpgradeValue = selectedUpgradeTable[upgradeValueDice];
        selectedSubstat.value += newUpgradeValue
    }

    /**
     * Increses the level of the artifact {this.lvl} and if the new level it's (0, 4, 8, 12, 16 or 20) will also upgrade a substat.
     */
    public upgradeArtifactOnce = () => {
        if(this._lvl === 20) return;
        this._lvl++;
        const mainstatTypeForValue = (['PYRO','ELECTRO','CRYO','HYDRO','DENDRO','ANEMO','GEO'].includes(this._mainstatType)) ? 'ELEMENTAL_DMG' : this._mainstatType;
        this._mainstatValue = dataSheet.mainStatLvlTable[mainstatTypeForValue][this._lvl];
        if(!(this._lvl % 4)){
            if(this._substats.length < 4){
                this.addSubstat();
            }
            else this.upgradeRandomSubstat();
        }
        console.log('level up done');
    }
    public isMaxLvl = () => { return this._lvl === 20}
    public giveExp = (expPieces: Number[]) => {
        // while(levels){
        //     if(this.lvl === 20) break;
        //     levels--;
        //     this.upgradeOnce();
        // }
    }
    public getLevel = () => { return this._lvl; }

    public serialized = () => {
        const serialSubstats: Array<{type: String, value: number}> = [];
        for(const substat of this._substats){
            let val = substat.value.toFixed(2);
            if(substat.type.endsWith('%') || (['CRIT_RATE', 'CRIT_DMG'].includes(substat.type))) val += '%';
            serialSubstats.push({type: substat.type, value: val});
        }
        return {
            setName: this._setName,
            type: this._pieceType, 
            mainstatType: this._mainstatType, 
            mainstatValue: this._mainstatValue,
            substats: serialSubstats, 
            CRIT_VAL: this.calcCritVal(), 
            LVL: this._lvl
        };
    }

    public print = () => {
        const serialSubstats = {}
        for(const substat of this._substats){
            let val = substat.value.toFixed(2);
            if(substat.type.endsWith('%') || (['CRIT_RATE', 'CRIT_DMG'].includes(substat.type))) val += '%';
            serialSubstats[substat.type] = val;
        }

        console.table({Info: {
            'Type': this._pieceType,
            'Set Name': this._setName,
            'Main Stat': this._mainstatType,
            'Main Stat Value': this._mainstatValue,
            'CRIT Value': this.calcCritVal().toFixed(2) + '%',
        }});
        console.table({Substats: serialSubstats})
    }

    get setName(){return this._setName}
    get pieceType(){return this._pieceType}
    get rarity(){return this._rarity}
}