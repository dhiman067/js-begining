// table chair bed banaite total koitaa w0od lgbe

function woodCalculator(quantityBed, quantityChair, quantityTable){
    const perBedWood = 3;
    const perChairWood = 2;
    const perTableWood = 1; 

    const bedWood = quantityBed * perBedWood;
    const chairWood = quantityChair * perChairWood;
    const tableWood = quantityTable * perTableWood;

    const totalWood =bedWood + chairWood + tableWood;
    return totalWood;
}

const totalWood = woodCalculator(2,3,1);
console.log(totalWood);