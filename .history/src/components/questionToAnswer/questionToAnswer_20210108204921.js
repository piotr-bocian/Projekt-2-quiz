import generadeRandomQuestions from '../generateQuestion/generateQuestion'

const questionToAnswer = (answersObj) => {
console.log('caly obiekt ', answersObj)

const allAnswers = answersObj.answers;
const rightAnswer = answersObj.rightAnswer
let checkedAnswer = false;

const checkAnswer = (answer)=>{
  checkedAnswer = (rightAnswer === answer)?checkedAnswer = true:false;
}

document.getElementById('swquiz-app').innerHTML  = `
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
    `;

  var allLi = document.getElementsByClassName("questions_item");

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function(e) {
      let choicedAnswer = e.target.textContent;
      console.log('clicked item: ' + e.target.textContent)
      // check if the answer is correct
      checkAnswer(choicedAnswer);
      // draw another question and answers
      generadeRandomQuestions(checkedAnswer);
    });
  }
  console.log(checkedAnswer)
return checkedAnswer;
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}