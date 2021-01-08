const questionToAnswer = (answersObj) => {
    const allAnswers = answersObj.answers
    return document.getElementById('swquiz-app').innerHTML  = `
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
        <div id="questions_item" class="questions_item">${allAnswers[0]}</div>
        <div id="questions_item" class="questions_item">${allAnswers[1]}</div>
        <div id="questions_item" class="questions_item">${allAnswers[2]}</div>
        <div id="questions_item" class="questions_item">${allAnswers[3]}</div>
    </div>
  `;
}
const q = document.getElementById("play");
console.log()

export default questionToAnswer;

// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}