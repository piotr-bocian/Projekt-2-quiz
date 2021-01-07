function gameRules(text) {

    const divRulesContainer = document.createElement("div");
    divRulesContainer.className = "rules";

    const divRules = document.createElement("div");
    divRules.id = "gameRules";
    divRules.innerHTML = text;

    const icon = document.createElement("img");
    icon.src = '../../../../Projekt-2-quiz/static/assets/ui/school_24px.png';
    icon.id = 'iconRules';

    const modeRules = document.createElement("div");
    modeRules.id = "modeRules";
    const modeText = document.createTextNode("Mode Rules");
    modeRules.appendChild(icon);
    modeRules.appendChild(modeText);

    divRulesContainer.appendChild(modeRules);
    divRulesContainer.appendChild(divRules);
    return divRulesContainer;
}

export default gameRules