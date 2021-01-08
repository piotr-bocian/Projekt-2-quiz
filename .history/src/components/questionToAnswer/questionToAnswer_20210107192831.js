const questionToAnswer = (answersObj) => {
    console.log(answersObj)
    return document.getElementById('swquiz-app').innerHTML = `
  <style>
.questions{
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap:10%;
}
.questions_item{
    padding:5px 20px;
    border:1px solid black;
    border-radius:20px;
}
  </style>

  <div class="questions">
        ${answersObj.map()=>{
            `<div class="questions_item">${answersObj.answers[0]}</div>`
        }}
        <div class="questions_item">${answersObj.answers[0]}</div>
        <div class="questions_item">${answersObj.answers[1]}</div>
        <div class="questions_item">${answersObj.answers[2]}</div>
        <div class="questions_item">${answersObj.answers[3]}</div>
    </div>
  `;
}
export default questionToAnswer;