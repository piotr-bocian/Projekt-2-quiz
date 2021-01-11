import generadeRandomQuestions from '../generateQuestion/LocalGenerateQuestion';
import { answerAgainCPU, cpu } from '../playerCPU/playerCPU';
import { playerUpdate } from '../playerHuman/playerHuman';
const questionToAnswer = (answersObj) => {
  const allAnswers = answersObj.answers;
  const rightAnswer = answersObj.rightAnswer;
  const img = answersObj.image;
  let checkedAnswer = false;

  const checkAnswer = (answer) => {
    if (rightAnswer === answer.innerHTML) {
      checkedAnswer = true;
      answer.className += ' corectAnswer';
    } else {
      answer.className += ' wrongAnswer';
    }
    return checkedAnswer;
  };

  document.getElementById('swquiz-app').innerHTML = `
    <style>
      .questions{
          display:grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          grid-gap:10%;
      }
      .questions_item{
          display:flex;
          padding:5px 20px;
          border:1px solid black;
          border-radius:20px;
          justify-self: stretch;
          justify-content: center;
          text-align:center;
      }
    </style>

    <div class="questions">
      <div id="test" class="questions_item">${allAnswers[0]}</div>
      <div id="test" class="questions_item">${allAnswers[1]}</div>
      <div id="test" class="questions_item">${allAnswers[2]}</div>
      <div id="test" class="questions_item">${allAnswers[3]}</div>
    </div>
    <br>
    <div>
      <img src="../../../static/assets/img/modes/all/${img}">
    </div>
    `;

  var allLi = document.getElementsByClassName('questions_item');

  for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', function (e) {
      let choicedAnswer = e.target;
      checkAnswer(choicedAnswer);
      //tutaj Update dla gracza player
      playerUpdate(e, checkAnswer(choicedAnswer));
      setTimeout(function () {
        generadeRandomQuestions(checkedAnswer);
      }, 1000);
      setTimeout(() => {
        answerAgainCPU();
      }, 600);
    });
  }
};

export default questionToAnswer;
