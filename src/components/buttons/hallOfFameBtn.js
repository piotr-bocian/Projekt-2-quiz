import showHallOfFame from '../hallOfFame/hallOfFame.js'
import fameText from '../hallOfFame/hallOfFameText.js';
import rulesButton from '../buttons/rulesBtn.js';

function hallOfFameButton(){

    const yellowButtonContainer = document.createElement("div");
    yellowButtonContainer.className = "yellow-button";

    const btn = document.createElement('button');
    btn.classList.add('hall-of-fame-btn');
    btn.appendChild(document.createTextNode('Hall of Fame'));

    yellowButtonContainer.appendChild(btn);

    const currentMode = document.querySelector('mode-change').getCurrentMode();
    btn.addEventListener('click', () => {
        document.body.replaceChild(showHallOfFame(fameText[currentMode.toLowerCase()]), document.querySelector('.rules'));
        document.body.replaceChild(rulesButton(), btn);
    
    })

    return yellowButtonContainer;
}

export default hallOfFameButton;