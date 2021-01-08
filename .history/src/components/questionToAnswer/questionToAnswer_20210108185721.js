const questionToAnswer = (answersObj) => {

  const testButton = document.getElementById("test");
    testButton.addEventListener('click', (e.) => {
      console.log(testButton.textContent)
  });
  
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}