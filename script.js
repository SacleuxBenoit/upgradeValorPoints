let gear = document.getElementById('gear');
let lowGear = document.getElementById('lowGear');
let upgradedGear = document.getElementById('upgradedGear');

let totalValor = document.getElementById('totalValor');

function showResult(){
    let resultRank = upgradedGear.value - lowGear.value;
    let result = gear.value * resultRank;
    totalValor.textContent = "Il faut au total : " + result + " point de vaillance";
}