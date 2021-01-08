const questionToAnswer = (answers) => {
    console.log(answers)
    return document.getElementById('swquiz-app').innerHTML = `
  <style>

}
  </style>
  <div class="questions">
        <div class="questions_item">1</div>
        <div class="questions_item">2</div>
        <div class="questions_item"></div>
        <div class="questions_item"></div>
    </div>
  `;
}

export default questionToAnswer;