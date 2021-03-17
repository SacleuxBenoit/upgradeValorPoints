let gear = document.getElementById('gear');
let lowGear = document.getElementById('lowGear');
let upgradedGear = document.getElementById('upgradedGear');

let displayValor = document.getElementById('displayValor');
let displayDungeon = document.getElementById('displayDungeon');
let displayTime = document.getElementById('displayTime');

function showResult(){

    // Calculate the total valor
    let resultRank = upgradedGear.value - lowGear.value;
    let result = gear.value * resultRank;
    displayValor.textContent = "Il faut au total : " + result + " point de vaillance";


    // calculate the number of dungeon that we need

    let numberDungeon = Math.ceil(result / 135);
    displayDungeon.textContent = " - "  + numberDungeon + " donjon";

    // Calculate the total time

    let time = numberDungeon * 12 / 60;
    displayTime.textContent = " - " + time + " heures, avec une moyenne de 12 minutes par donjon";
}
