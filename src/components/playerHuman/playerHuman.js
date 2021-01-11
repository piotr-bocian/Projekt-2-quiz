class PlayerHuman {
  constructor() {
    this.allAnswer = 0;
    this.rightAnswer = 0;
    this.playerAnswer = '';
    this.answeredQuestion = false;
  }

  playerChose(click) {
    this.playerAnswer = click;
  }

  answerCounter(calFn) {
    this.answeredQuestion = true;
    const correctAns = calFn;
    if (correctAns) {
      this.rightAnswer++;
      this.allAnswer++;
    } else {
      this.allAnswer++;
    }
  }

  restoreDefault() {
    this.allAnswer = 0;
    this.playerAnswer = '';
    this.answeredQuestion = false;
  }
}

const playerHuman = new PlayerHuman();

function playerUpdate(e, callFn) {
  playerHuman.playerChose(e.target.innerHTML);
  playerHuman.answerCounter(callFn);
  console.log(playerHuman);
  return playerHuman;
}

export { playerUpdate };
