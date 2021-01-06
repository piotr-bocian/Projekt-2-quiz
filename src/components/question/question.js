function gameQuestion(text) {

    const divQuestion = document.createElement("div");
    divQuestion.className = "title";

    const pQuestion = document.createElement("p");
    pQuestion.id = "question"
    pQuestion.innerHTML = text;

    divQuestion.appendChild(pQuestion);

    return divQuestion;
}

// document.body.appendChild(gameQuestion("test"));


function question(mode, cb) {
    if (mode === "People"){
        return cb("Who is this character?")
    } else if (mode === "Vehicles") {
        return cb("Do you recognize this vehicle?")
    } else if (mode === "Starships"){
        return cb("Do you recognize this starship?")
    }
}

document.body.appendChild(question("Vehicles", gameQuestion));