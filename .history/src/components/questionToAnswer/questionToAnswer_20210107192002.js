const questionToAnswer = (answers) => {
    console.log(answers)
    return document.getElementById('swquiz-app').innerHTML = `
  <style>
.questions{
    display:grid;
    grid-template-columns: 2fr 2fr;
    ustify-items: center;
}
.questions_item{
    width:50%;
}
  </style>

  <div class="questions">
        <div class="questions_item">${answers.answers[0]}</div>
        <div class="questions_item">${answers.answers[1]}</div>
        <div class="questions_item">${answers.answers[2]}</div>
        <div class="questions_item">${answers.answers[3]}</div>
    </div>
  `;
}

export default questionToAnswer;