// import generadeRandomQuestions from '../generateQuestion/LocalGenerateQuestion';
import generadeRandomQuestions from '../generateQuestion/generateQuestion';
import { playerUpdate } from '../playerHuman/playerHuman';
import { cpu } from '../playerCPU/playerCPU';
import { getRightSelector } from './getRightSelector';

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
    } else {cpu.noOfAnswers += 1;}
    cpu.addDataToArrays(img, rightAnswer);
    console.log(cpu);
    return;
  };

  getRightSelector().innerHTML = `
    <style>
      .questions{
          width: 90%;
          height: 50%;
          display:grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          grid-gap:10%;
      }
      .questions_item{
          color: white;
          font-size: 1.5em;
          display:flex;
          padding:10px 20px;
          border:1px solid white;
          border-radius:10px;
          justify-self: stretch;
          justify-content: center;
          text-align:center;
          align-items: center;
          align-self: center;
      }
    </style>

    <div class="questions">
      <div class="questions_item">${allAnswers[0]}</div>
      <div class="questions_item">${allAnswers[1]}</div>
      <div class="questions_item">${allAnswers[2]}</div>
      <div class="questions_item">${allAnswers[3]}</div>
    </div>
    <br>

    `;

  const imga = document.querySelector(".img-container > img");
  imga.setAttribute('src',`../../../static/assets/img/modes/${img}` );

  //   <div>

  //   <img src="../../../static/assets/img/modes/${img}">
  // </div>

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
      }, 100);
    });
  }
};

export default questionToAnswer;
