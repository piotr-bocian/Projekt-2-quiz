const questionToAnswer = (answersObj) => {


  var allLi = document.getElementsByClassName("questions_item");

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function(e) {
      console.log(e)
      
    });
  }
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}