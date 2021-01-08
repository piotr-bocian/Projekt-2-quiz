const questionToAnswer = (answers) => {
    console.log(answers)
    return document.getElementById('swquiz-app').innerHTML = `
  <style>

  </style>

  <div class="questions">
        <div class="questions_item">${answers.rightAnswer[0]}</div>
        <div class="questions_item">${answers.rightAnswer[0]}</div>
        <div class="questions_item">${answers.rightAnswer[0]}</div>
        <div class="questions_item">${answers.rightAnswer[0]}</div>
    </div>
  `;
}

export default questionToAnswer;