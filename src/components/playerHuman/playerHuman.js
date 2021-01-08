//do klasy przepisać

class PlayerHuman {
  constructor() {
    this.pickedAnswer = [];
    this.correctAnswer = 0;
  }
  getAnswer() {
    let playerAnswer = [];
    const questionQuery = document.querySelectorAll('.q');
    questionQuery.forEach((element) => {
      element.addEventListener(
        'click',
        (event) => {
          playerAnswer.push(event.currentTarget.innerHTM);
          console.log(playerAnswer);
        },
        { once: true },
      );
    });
    return this.pickedAnswer.push(playerAnswer);
  }
}

const player = new PlayerHuman();
console.log(player);
player.getAnswer();
