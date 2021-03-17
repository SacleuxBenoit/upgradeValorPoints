let gear = document.getElementById('gear');
let lowGear = document.getElementById('lowGear');
let upgradedGear = document.getElementById('upgradedGear');

let totalValor = document.getElementById('totalValor');
let totalDungeon = document.getElementById('totalDungeon');
let totalTime = document.getElementById('totalTime');

function showResult(){

    // Calculate the total valor
    let resultRank = upgradedGear.value - lowGear.value;
    let result = gear.value * resultRank;
    totalValor.textContent = "Il faut au total : " + result + " point de vaillance";


    // calculate the number of dungeon that we need

    let numberDungeon = Math.ceil(result / 135);
    totalDungeon.textContent = " - "  + numberDungeon + " donjon";

    // Calculate the total time

    let time = numberDungeon * 12 / 60;
    totalTime.textContent = " - " + time + " heures, avec une moyenne de 12 minutes par donjon";
}
