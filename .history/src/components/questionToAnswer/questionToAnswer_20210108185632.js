const questionToAnswer = (answersObj) => {

  const testButton = document.getElementById("test");
    testButton.addEventListener('click', () => {
      console.log(testButton.val())
  });
  
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}