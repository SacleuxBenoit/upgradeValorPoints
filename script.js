let gear = document.getElementById('gear');
let lowGear = document.getElementById('lowGear');
let upgradedGear = document.getElementById('upgradedGear');

let totalValor = document.getElementById('totalValor');
let totalDungeon = document.getElementById('totalDungeon');

function showResult(){
    let resultRank = upgradedGear.value - lowGear.value;
    let result = gear.value * resultRank;
    totalValor.textContent = "Il faut au total : " + result + " point de vaillance";

    let numberDungeon = Math.ceil(result / 135);
    totalDungeon.textContent = "Ce qui équivaut donc à : " + numberDungeon + " donjon";

}
