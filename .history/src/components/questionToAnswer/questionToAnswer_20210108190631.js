const questionToAnswer = (answersObj) => {


  var allLi = document.getElementsByClassName("questions_item");

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("questions_item");
      current[0].textCon
    });
  }
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}