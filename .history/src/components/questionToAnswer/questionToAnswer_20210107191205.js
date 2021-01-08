const questionToAnswer = (answers) => {
    console.log(answers)
    return document.getElementById('swquiz-app').innerHTML = `
  <style>
  
  </style>

  <div class="questions">
        <div class="questions_item">1</div>
        <div class="questions_item">2</div>
        <div class="questions_item">3</div>
        <div class="questions_item">4</div>
    </div>
  `;
}

export default questionToAnswer;