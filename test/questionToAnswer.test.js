
import '@testing-library/jest-dom/extend-expect';


const questionToAnswer = (answersObj) => {
   const allAnswers = answersObj.answers;
   const img = answersObj.image;
   const div = document.createElement('div');
   div.innerHTML = `
   <div class="questions">
   <div class="questions_item">${allAnswers[0]}</div>
   <div class="questions_item">${allAnswers[1]}</div>
   <div class="questions_item">${allAnswers[2]}</div>
   <div class="questions_item">${allAnswers[3]}</div>
 </div>
 <div>
      <img src="../../../static/assets/img/modes/${img}">
    </div>
     `;
     return div
 };


it ('should insert four answers and from Star Wars object to DOM', ()=>{
   const starWarsObject = {
      image: 'people/4.jpg',
      answers: ['Darth Vader', 'Leia Organa', 'Beru Whitesun lars', 'Zam Wesell'],
      rightAnswer:'Darth Vader',
    }
    expect(questionToAnswer(starWarsObject)).toHaveTextContent(
      'Darth Vader'
    )
    expect(questionToAnswer(starWarsObject)).toHaveTextContent(
      'Leia Organa'
    )
    expect(questionToAnswer(starWarsObject)).toHaveTextContent(
      'Beru Whitesun lars'
    )
    expect(questionToAnswer(starWarsObject)).toHaveTextContent(
      'Zam Wesell'
    )
   //  expect(questionToAnswer(starWarsObject)).toHaveTextContent(
   //    '../../../static/assets/img/modes/people/4.jpg'
   //  )

})

