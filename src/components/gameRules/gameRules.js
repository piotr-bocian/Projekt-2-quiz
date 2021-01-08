function gameRules(text) {

    const divRulesContainer = document.createElement("div");
    divRulesContainer.className = "rules";

    const divRules = document.createElement("div");
    divRules.id = "gameRules";
    divRules.innerHTML = text;

    const icon = document.createElement("img");
    const src = "../../../static/assets/ui/graduation-cap-solid.svg";
    icon.setAttribute('src', src);
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

export default gameRules;