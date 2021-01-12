// import generadeRandomQuestions from '../generateQuestion/LocalGenerateQuestion';
import generadeRandomQuestions from '../generateQuestion/generateQuestion';
import { cpu } from '../playerCPU/playerCPU';
import { playerUpdate } from '../playerHuman/playerHuman';
const questionToAnswer = (answersObj) => {
  const allAnswers = answersObj.answers;
  const rightAnswer = answersObj.rightAnswer;
  const img = answersObj.image;
  let checkedAnswer = false;
  let checkedCPUAnswer = false;

  const checkAnswer = (answer) => {
    if (rightAnswer === answer.innerHTML) {
      checkedAnswer = true;
      answer.className += ' corectAnswer';
    } else {
      answer.className += ' wrongAnswer';
    }
    return checkedAnswer;
  };

  const checkCPUAnswer = (ans) => {
    if (rightAnswer === ans) {
      checkedCPUAnswer = true;
      cpu.correctAnswers +=1;
    }
    console.log(cpu);
    return;
  };

  setTimeout(() => checkCPUAnswer(cpu.answer),100);

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

      <img src="../../../static/assets/img/modes/${img}">
    </div>
    `;

    //podmień img dla wersji lokalnej
{/* <img src="../../../static/assets/img/modes/all/${img}"></img> */}
  var allLi = document.getElementsByClassName('questions_item');

  for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', function (e) {
      let choicedAnswer = e.target;
      checkAnswer(choicedAnswer);
      //tutaj Update dla gracza player
      playerUpdate(e, checkAnswer(choicedAnswer));
      setTimeout(function () {
        generadeRandomQuestions(checkedAnswer);
      }, 500);
      setTimeout(() => {
        cpu.answerQuestion();
      }, 600);
    });
  }
};

export default questionToAnswer;
