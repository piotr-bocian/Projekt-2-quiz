function pickAnswer(selector) {
  const value = [];
  const questionQuery = [...document.querySelectorAll(selector)];
  questionQuery.map((element) => {
    element.addEventListener('click', (event) => {
      value.push(event.currentTarget.innerText);
    });
  });
  return value;
}

class PlayerHumana {
  constructor(playerAnswer) {
    this.allAnswer = 0;
    this.playerAnswer = playerAnswer;
  }
  answerCounter() {
    this.playerAnswer.length > 0 ? this.allAnswer++ : (this.allAnswer = 0);
  }

  restoreDefault() {
    this.allAnswer = 0;
    this.playerAnswer = this.playerAnswer;
  }
}

//////////////////////////////////////////////////////////////////////////////

class PlayerHuman {
  constructor() {
    this.allAnswer = 0;
    this.playerAnswer = this.playerChose();
  }
  playerChose() {
    const pickedAnswer = [];
    const questionQuery = [...document.querySelectorAll('.q')];
    questionQuery.map((element) => {
      element.addEventListener('click', (event) => {
        pickedAnswer.push(event.currentTarget.innerText);
      });
    });
    return pickedAnswer;
  }

  answerCounter() {
    this.playerAnswer.length > 0 ? this.allAnswer++ : (this.allAnswer = 0);
  }

  restoreDefault() {
    this.allAnswer = 0;
    this.playerAnswer = this.playerChose();
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
document.querySelector('.restore').addEventListener('click', () => {
  playerHuman.restoreDefault();
});
document.querySelectorAll('.q').forEach(e=>{
  e.addEventListener('click', playerUpdate)
})
playGame.addEventListener('click', playerUpdate);
