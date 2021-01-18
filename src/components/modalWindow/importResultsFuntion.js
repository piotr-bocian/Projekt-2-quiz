function resultsWindow (playerCPU, playerHuman) {

let allAnswers = playerCPU.allCorrectAnswers;
let allImages = playerCPU.allImageArr;
let allHumanAnswers = playerHuman.allPlayerAnswers;
let allCPUAnswers = playerCPU.allCpuAnswers;

let fullDiv = document.createElement("div");

for (let i = 0; i < allAnswers.length; i++) {

    let summaryDiv = document.createElement("div");

    const correctAnswerImage = document.createElement("img");
    correctAnswerImage.src = `../../../../Projekt-2-quiz/static/assets/img/modes/${allImages[i]}`;

    const correctAnswerElement = document.createElement("p");
    correctAnswerElement.innerText = allAnswers[i];
    correctAnswerElement.className = "answers-correct-right"

    const humanAnswerElement = document.createElement("p");
    humanAnswerElement.innerText = allHumanAnswers[i];
    humanAnswerElement.className = (allHumanAnswers[i] === allAnswers[i]) ? "answers-table-correct" : "answers-table-incorrect";

    const computerAnswerNameElement = document.createElement("p");
    computerAnswerNameElement.innerText = allCPUAnswers[i];
    computerAnswerNameElement.className = (allCPUAnswers[i] === allAnswers[i]) ? "answers-table-correct" : "answers-table-incorrect";

    summaryDiv.appendChild(correctAnswerImage);
    summaryDiv.appendChild(correctAnswerElement);
    summaryDiv.appendChild(humanAnswerElement);
    summaryDiv.appendChild(computerAnswerNameElement);

    fullDiv.appendChild(summaryDiv);
}
return fullDiv;

}

export default resultsWindow;