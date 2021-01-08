const questionToAnswer = (answersObj) => {


  var allLi = document.getElementsByClassName("questions");

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("questions_item");
    current.addEventListener('click', (e) => {
      console.log(e.currentTarget)
  });
    });
  }
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}