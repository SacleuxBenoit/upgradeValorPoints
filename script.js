let gear = document.getElementById('gear');
let lowGear = document.getElementById('lowGear');
let upgradedGear = document.getElementById('upgradedGear');

let displayValor = document.getElementById('displayValor');
let displayDungeon = document.getElementById('displayDungeon');
let displayTime = document.getElementById('displayTime');
let displayEpicQuest = document.getElementById('displayEpicQuest');
let displayBlueQuest = document.getElementById('displayBlueQuest');


function showResult(){

    // Calculate the total valor
    let resultRank = upgradedGear.value - lowGear.value;
    let totalValor = gear.value * resultRank;

    if(totalValor >= 0){

        displayValor.textContent = "Il faut au total : " + totalValor + " point de vaillance";

        // calculate the number of dungeon that we need
    
        let numberDungeon = Math.ceil(totalValor / 135);
        displayDungeon.textContent = " - "  + numberDungeon + " donjon";
    
        // Calculate the total time
    
        let time = numberDungeon * 12 / 60;
        displayTime.textContent = " - " + time + " heures, avec une moyenne de 12 minutes par donjon +2";
    
        // Calculate the total of epic quest
    
        let totalEpicQuest = Math.ceil(totalValor / 50);
        displayEpicQuest.textContent = " - " + totalEpicQuest + " Appels épique";
    
        // Calculate the total of blue quest
    
        let totalBlueQuest = Math.ceil(totalValor / 35);
        displayBlueQuest.textContent = " - " + totalBlueQuest + " Appels bleu";

    }else{
        displayValor.textContent = "Il faut au total : 0 point de vaillance";
        displayDungeon.textContent = " - 0 donjon";
        displayTime.textContent = " - 0 heures, avec une moyenne de 12 minutes par donjon +2";
        displayEpicQuest.textContent = " - 0 Appels épique";
        displayBlueQuest.textContent = " - 0 Appels bleu";
    }

}
