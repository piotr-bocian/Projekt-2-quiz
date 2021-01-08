const questionToAnswer = (answersObj) => {
  const testButton = document.getElementById("test").val();
  console.log(testButton)
}

const playGameButton = document.getElementById("play");
playGameButton.addEventListener('click', () => {
    console.log('click')
    fastGenerate();
});

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}