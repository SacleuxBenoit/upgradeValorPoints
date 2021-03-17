let gear = document.getElementById('gear');
let lowGear = document.getElementById('lowGear');
let upgradedGear = document.getElementById('upgradedGear');

function showResult(){
    let resultRank = upgradedGear.value - lowGear.value;
    let result = gear.value * resultRank;
    alert(result)
}