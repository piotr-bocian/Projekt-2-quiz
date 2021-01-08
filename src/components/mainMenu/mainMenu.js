import gameRules from '../gameRules/gameRules.js';
import modeChange from '../modeChange/modeChange.js';
import gameQuestion from '../question/question.js';

import rulesText from '../gameRules/gameRulesText.js';
import questionText from '../question/questionText.js';

import img from '../imgContainer/img.js';
import redButton from '../redButton/redButton.js';
import logo from '../logoStarWars/logo.js';

const mainMenu = () => {
    modeChange();
    document.body.appendChild(gameQuestion(questionText.people));
    document.body.appendChild(gameRules(rulesText.people));
    document.body.appendChild(img('../../../static/assets/img/modes/people/36.jpg'));
    document.body.appendChild(redButton("PLAY THE GAME"));
    document.body.appendChild(logo());
}

mainMenu();