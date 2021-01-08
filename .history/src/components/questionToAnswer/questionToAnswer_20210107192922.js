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
        ${answersObj..map(a)=>{
            `<div class="questions_item">${a.answers}</div>`
        }}
    </div>
  `;
}
export default questionToAnswer;