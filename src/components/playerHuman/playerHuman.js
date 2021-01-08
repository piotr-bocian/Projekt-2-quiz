class PlayerHuman {
  constructor() {
    this.allAnswer = 0;
    this.rightAnswer = 0;
    this.playerAnswer = '';
    this.answeredQuestion = false;
    this.playerChose();
  }

  playerChose() {
    const questionQuery = [...document.querySelectorAll('.q')];
    questionQuery.map((element) => {
      element.addEventListener('click', (event) => {
        return (this.playerAnswer = event.currentTarget.innerText);
      });
    });
  }

  answerCounter() {
    if (this.playerAnswer) {
      this.allAnswer++;
      this.answeredQuestion = true;
    }
  }

  rightAnswer() {}

  restoreDefault() {
    this.allAnswer = 0;
    this.playerAnswer = '';
    this.playerAnswer = '';
    this.answeredQuestion = false;
  }
}

const playerHuman = new PlayerHuman();

function playerUpdate() {
  playerHuman.playerChose();
  playerHuman.answerCounter();
  console.log(playerHuman);
  return playerHuman;
}

const playGame = document.querySelector('button');
document.querySelector('button').addEventListener('click', () => {
  playerHuman.restoreDefault();
});
document.querySelectorAll('.q').forEach((e) => {
  e.addEventListener('click', playerUpdate);
});
// playGame.addEventListener('click', playerUpdate);
