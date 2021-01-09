import gameRules from "../gameRules/gameRules.js";
import rulesText from "../gameRules/gameRulesText.js";
import hallOfFameButton from "../buttons/hallOfFameBtn.js";

function rulesButton(){

    const btn = document.createElement('button');
    btn.classList.add('hall-of-fame-btn');
    btn.appendChild(document.createTextNode('Rules'));
    
    const currentMode = document.querySelector('mode-change').getCurrentMode();
    btn.addEventListener('click', () => {
        document.body.replaceChild(gameRules(rulesText[currentMode.toLowerCase()]), document.querySelector('.fame-container'));
        document.body.replaceChild(hallOfFameButton(), document.querySelector('.yellow-button'));
    })
    return btn;
}

export default rulesButton;