const questionToAnswer = (answersObj) => {
  var allLi = document.getElementsByClassName("mode-list-element");

  for (var i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  const testButton = document.getElementById("test");
    testButton.addEventListener('click', (e) => {
      console.log(e.target.textContent)
  });
}

export default questionToAnswer;



// zrobić pózniej ładne generowanie "li"
// ${allAnswers.map(a)=>{<div class="questions_item">${a}</div>}