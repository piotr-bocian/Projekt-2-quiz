// import generadeRandomQuestions from '../generateQuestion/LocalGenerateQuestion';
import generadeRandomQuestions from '../generateQuestion/generateQuestion';
import { playerUpdate } from '../playerHuman/playerHuman';
import { cpu } from '../playerCPU/playerCPU';

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

  const checkCPUAnswer = (cpuAns) => {
    if (rightAnswer === cpuAns) {
      cpu.correctAnswers += 1;
      cpu.noOfAnswers += 1;
    }
    cpu.noOfAnswers += 1;
    console.log(cpu);
    return;
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
      <div class="questions_item">${allAnswers[0]}</div>
      <div class="questions_item">${allAnswers[1]}</div>
      <div class="questions_item">${allAnswers[2]}</div>
      <div class="questions_item">${allAnswers[3]}</div>
    </div>
    <br>
    <div>

      <img src="../../../static/assets/img/modes/${img}">
    </div>
    `;

  //podmień img dla wersji lokalnej
  {
    /* <img src="../../../static/assets/img/modes/all/${img}"></img> */
  }
  const divsWithAnswers = document.querySelectorAll('.questions_item');

  for (let i = 0; i < divsWithAnswers.length; i++) {
    divsWithAnswers[i].addEventListener('click', function (e) {
      let choicedAnswer = e.target;
      checkAnswer(choicedAnswer);
      checkCPUAnswer(cpu.answer);
      //tutaj Update dla gracza player
      playerUpdate(e, checkAnswer(choicedAnswer));
      setTimeout(function () {
        generadeRandomQuestions();
      }, 50);
    });
  }
};

export default questionToAnswer;
