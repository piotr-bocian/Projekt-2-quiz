import showHallOfFame from '../hallOfFame/hallOfFame.js'
import fameText from '../hallOfFame/hallOfFameText.js';
import rulesButton from '../buttons/rulesBtn.js';

function hallOfFameButton(){

    const btn = document.createElement('button');
    btn.classList.add('hall-of-fame-btn');
    btn.appendChild(document.createTextNode('Hall of Fame'));

    const currentMode = document.querySelector('mode-change').getCurrentMode();
    btn.addEventListener('click', () => {
        document.body.replaceChild(showHallOfFame(fameText[currentMode.toLowerCase()]), document.querySelector('.rules'));
        document.body.replaceChild(rulesButton(), btn);
    })

    return btn;
}

export default hallOfFameButton;