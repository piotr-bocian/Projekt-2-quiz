import getDefaultRanking from '../localStorage/localStorage.js';
import {modifyStorage} from '../localStorage/localStorage.js';

function modalWindowContent(playerCorrect, playerAll, computerCorrect, computerAll){

    //GAME OVER DIV
    const gameOver = document.createElement("div");
    gameOver.className = "game-over";

    const title = document.createElement("h1");
    title.className = "game-over";
    title.innerHTML = "GAME OVER";
    gameOver.appendChild(title);

    const text = document.createElement("p");
    text.className = "game-over";
    text.innerHTML = `The force is strong in you young Padawan! During 1 minute you have answered ${playerCorrect} / ${playerAll} questions. And Google quessed ${computerCorrect} / ${computerAll}.`
    gameOver.appendChild(text);


    //RESULTS TABLE DIV
    const results = document.createElement("div");
    results.className = "results";

    const resultTitle = document.createElement("h2");
    resultTitle.innerHTML = "Detailed answers"
    results.appendChild(resultTitle);

    const superAnswer = document.createElement("div");
    superAnswer.className = "super-answer";
    results.appendChild(superAnswer);

    const superAnswerHeader = document.createElement("div");
    superAnswerHeader.className = "super-answer-header";
    superAnswer.appendChild(superAnswerHeader);

    superAnswerHeader.innerHTML = `
    <p></p>
    <p>Correct</p>
    <p>You</p>
    <p>Computer</p>
    `;

    const superAnswerBody = document.createElement("div");
    superAnswerBody.className = "super-answer-body";
    superAnswer.appendChild(superAnswerBody);

    // const superAnswerBodyRow = (correct, playerAnswer, computerAnswer) => {

    //     for (let i = 0; i < correct.length; i++) {

    //         const summaryDiv = document.createElement("div");

    //         const correctAnswerNameElement = document.createElement("p");
    //         correctAnswerNameElement.innerText = correct[i];
    //         correctAnswerNameElement.className = "answers-correct-right"

    //         const humanAnswerNameElement = document.createElement("p");
    //         humanAnswerNameElement.innerText = playerAnswer[i];
    //         humanAnswerNameElement.className = (playerAnswer === correct) ? "answers-table-correct" : "answers-table-incorrect";

    //         const computerAnswerNameElement = document.createElement("p");
    //         computerAnswerNameElement.innerText = computerAnswer[i];
    //         computerAnswerNameElement.className = (computerAnswer === computerAnswer) ? "answers-table-correct" : "answers-table-incorrect";

    //         summaryDiv.appendChild(correctAnswerNameElement);
    //         summaryDiv.appendChild(humanAnswerNameElement);
    //         summaryDiv.appendChild(computerAnswerNameElement);

    //         superAnswerBody.appendChild(summaryDiv);
    //     }
    // }

    //YODA PICTURE DIV
    const yoda = document.createElement("img");
    yoda.className = "yoda";
    const src = "../../../static/assets/ui/MasterYodaLeft.png";
    yoda.setAttribute('src', src);


    // STUPID NOT WORKING DIV WITH FORM INPUT AND A BUTTON // ok it works now, we're cool
    //FORM
    const inputTry = document.createElement("form");
    inputTry.id = "inputTry";

    const labelTry = document.createElement("label");

    const player = document.createElement("input");
    player.type = "text";
    player.minLength = "2";
    player.maxLength = "20";
    player.id = "player-input"
    player.required = "required";
    
    labelTry.appendChild(player);
    labelTry.htmlFor = "player-input";
    
    const fillName = document.createElement("div");
    fillName.className = "fill-name";
    fillName.innerHTML = "Please fill your name in order to receive eternal glory in the whole Galaxy!";
    
    labelTry.appendChild(fillName);
    inputTry.appendChild(labelTry);

    //BUTTON
    const btn = document.createElement("input");
    btn.value = "MAY THE FORCE BE WITH YOU";
    btn.type = "submit";
    btn.className = "force-button";

    inputTry.appendChild(btn);

    //FUNCTIONALITY WITH FORM & LOCAL STORAGE

    const objReturn = () =>  {
        let yourInput = document.getElementById('player-input');
        let input = yourInput.value;
        let obj = new Object();
        
        if (input.length >= 2) {
            obj.nick = input;
            obj.playerCorrect = playerCorrect;
            obj.playerAll = playerAll;
        } else {
            throw "Please enter a correct value!"
        }

        console.log(obj);
        return obj;
    }

    const returnToMainPage = () => {
        location.replace("../../../index.html");
    }


    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const playerObject = objReturn();
        const mode = document.body.querySelector("mode-change").shadowRoot.querySelector(".dark").innerHTML;
        returnToMainPage();

         // HALLOFFAME LOCALSTORAGE
        let pNick = playerObject.nick;
        let pCorrectAnswers = playerObject.playerCorrect;
        let pAnswers = playerObject.playerAll;
        modifyStorage(mode, pNick, pCorrectAnswers, pAnswers);
     })



    //BRINGING IT ALL TOGETHER
    const superDiv = document.createElement("div");
    superDiv.className = "superDiv";
    superDiv.appendChild(gameOver);
    superDiv.appendChild(results);
    superDiv.appendChild(yoda);
    superDiv.appendChild(inputTry);

    return superDiv;
}

export default modalWindowContent;