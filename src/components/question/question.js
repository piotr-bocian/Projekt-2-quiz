function gameQuestion(text) {

    const divQuestion = document.createElement("div");
    divQuestion.className = "title";

    const pQuestion = document.createElement("p");
    pQuestion.id = "question"
    pQuestion.innerHTML = text;

    divQuestion.appendChild(pQuestion);

    return divQuestion;
};

export default gameQuestion;