class PlayerHuman {
  constructor() {
    this.playerAnswer = this.playerChose();
    // this.answersCounter = this.playerAnswer.length;

  }
  playerChose() {
    const pickedAnswer = [];
    const questionQuery = [...document.querySelectorAll('.q')];
    questionQuery.map((element) => {
      element.addEventListener(
        'click',
        (event) => {
          pickedAnswer.push(event.currentTarget.innerText);
        },
        { once: true },
      );
    });
    return pickedAnswer;
  }
}

function createPlayer() {
  const playerHuman = new PlayerHuman();
  console.log(playerHuman);
  return playerHuman;
}

const playGame = document.querySelector('button');
playGame.addEventListener('click', createPlayer);
