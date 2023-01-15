let progress = 0;
const fs = require('fs');

const baseProb = 0.006;
const pityProb = 0.06;
const softPityStart = 73; 

let guaranteed = false;

let fiveStarsFoundTotal = 0;
let totalPulls = 0;
let desired5stars = 0;

const Sim = (startingWishCount = 1, effectiveWishCount = 1) => {
    const wishCount = startingWishCount;
    const effectiveProbability = Math.min(baseProb + Math.max(0, wishCount - softPityStart) * pityProb, 1);
    const roll = Math.random();
    const win = roll <= effectiveProbability;
    if(win){
        fiveStarsFoundTotal++;
        const specificProbaility = guaranteed ? 1.0 : 0.5;
        const won5050 = Math.random() <= specificProbaility;
        guaranteed = !won5050;
        if(won5050) {
            totalPulls += effectiveWishCount;
            return effectiveWishCount;
        }
            return Sim(1, effectiveWishCount + 1);
    }
    return Sim(wishCount + 1, effectiveWishCount + 1);
}




const RunAllSims = () => {
    let sum = 0;
    let early = 0;
    let late = 0;
    let normalDistribution = new Array(180).fill(0);
    let innerDistribution = new Array(180).fill(0);
    let outerDistribution = new Array(180).fill(0);
    const simulations = 1_000_000;
    console.clear();
    console.log('Simulating...');

    const displayResult = () => {
        const earlyPercent =    Number((early / simulations * 100).toFixed(5));
        const latePercent =     Number((late / simulations * 100).toFixed(5));
    
        const infoTable = {
            early:  `${earlyPercent}%`,
            late: `${latePercent}%`,
            average: `#${(sum / simulations).toFixed(0)}`
        }
    
        const effectiveDistributionArray = new Array(90).fill({normal : 0, inner: 0, outer: 0});
        for(let i = 0; i < 180; i++){
            let effectiveDistribution = Number((normalDistribution[i] / simulations) * 100).toFixed(5);
            let effectiveInnerDistribution = Number((innerDistribution[i] / simulations) * 100).toFixed(5);
            let effectiveOuterDistribution = Number((outerDistribution[i] / simulations) * 100).toFixed(5);
            effectiveDistributionArray[i] = {
                normal: effectiveDistribution,
                inner: effectiveOuterDistribution,
                outer: effectiveInnerDistribution,
            }
        }

        let csvTxt = 'Pity,Probability,Inner Distribution,Outer Distribution\r\n';
        for(let i = 0; i < 180; i++){
            csvTxt += `${i+1},${effectiveDistributionArray[i].normal},${effectiveDistributionArray[i].inner},${effectiveDistributionArray[i].outer}\r\n`;
        }


        console.clear();
        console.table(infoTable);
        console.table(effectiveDistributionArray);
        
        fs.writeFile('sim.csv', csvTxt, err=>{
            if(err) console.log(err);
        });
    }

    const runOneSim = () => {
        const foundAtPity = Sim();
        if(foundAtPity < 30) early++;
        if(foundAtPity >= 70) late++;
        normalDistribution[foundAtPity - 1]++;
        for(let i = 0; i < foundAtPity - 1; i++) innerDistribution[i]++;
        for(let i = foundAtPity - 1; i < 180; i++) outerDistribution[i]++;
        sum += foundAtPity;
        progress++;
        return progress;
    }

    for(let i = 0; i < simulations; i++) runOneSim();

    displayResult();
  
}

RunAllSims();


// console.log();

// console.log('Press Enter To Run Simulation!');

// process.stdin.on('data', e=>{
//     console.clear();
//     console.log('You found your desired character after:', Sim(), 'Pulls!!');
//     desired5stars++;
//     console.log('Total 5 stars found:', fiveStarsFoundTotal);
//     console.log('Total Desired 5 stars found:', desired5stars);
//     console.log('Total Pulls:', totalPulls, '(', totalPulls*160, 'Primogems,', `${(totalPulls*160*0.0111).toFixed(2)}£`, ')')
//     console.log()
//     console.log('Press Enter To Run Simulation Again!');
// })