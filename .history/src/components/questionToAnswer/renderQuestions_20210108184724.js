
const renderQuestions = () => {

console.log('render functin')

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
        <div id="test" class="questions_item">${allAnswers[0]}</div>
        <div id="test2" class="questions_item">${allAnswers[1]}</div>
        <div id="test3" class="questions_item">${allAnswers[2]}</div>
        <div id="test4" class="questions_item">${allAnswers[3]}</div>
    </div>
  `;
}

export default renderQuestions;