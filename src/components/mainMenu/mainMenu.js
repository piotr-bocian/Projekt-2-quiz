import gameRules from '../gameRules/gameRules.js';
import modeChange from '../modeChange/modeChange.js';
import gameQuestion from '../question/question.js';

import rulesText from '../gameRules/gameRulesText.js';
import questionText from '../question/questionText.js';

const mainMenu = () => {
    modeChange();
    document.body.appendChild(gameQuestion(questionText.people));
    document.body.appendChild(gameRules(rulesText.people));
}

mainMenu();