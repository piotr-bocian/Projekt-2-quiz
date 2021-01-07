const totalQuestions = (selector) => {
  const allQuestions = [];
  const questionQuery = document.querySelectorAll(selector);
  questionQuery.forEach((e) => {
    allQuestions.push(e.innerHTML);
  });
  return allQuestions;
};

const pickedAnswer = (selector) => {
  const questionQuery = document.querySelectorAll(selector);
  questionQuery.forEach((element) => {
    element.addEventListener('click', (event) => {
      let playerAnswer;
      playerAnswer = event.currentTarget.innerHTML;
      console.log(playerAnswer);
      return playerAnswer;
    });
  });

};

pickedAnswer('.q');

//na wyjsciu mam obiekt player
//allQuestions to tablica, która kumuluje odpowiedzi z divów z pytaniami w formie tablicy, każda wewnętrzna tablica będzie o dlugości 4 elementów, każdy z elementów to zadane pytania;
//allGames to wszystkie rozegrane gry. Jest równa player.allQuestions.length. Wiemy ile gier rozegrał gracz;
// pickedAnswer to tablica z odpowiedziami wybranymi przez gracza. Jej długośc będzie się zgadzać z długością tablicy allQuestions.
function playerGames(allQuestionsClb, pickedAnswersClb) {
  const questions = allQuestionsClb;
  const picked = pickedAnswersClb;
  const player = {
    allQuestions: [],
    pickedAnswers: [],
    allGames: '',
  };
  player.allQuestions.push(questions);
  player.pickedAnswers.push(picked);
  player.allGames = player.allQuestions.length;
  return player;
}

console.log(playerGames(totalQuestions('.q'), pickedAnswer()));
