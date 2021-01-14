import {
  PlayerHuman,
  playerUpdate,
} from '../src/components/playerHuman/playerHuman';

it('should create new player human', () => {
  const player = new PlayerHuman();
  player.allAnswer = 5;
  player.rightAnswer = 3;
  player.playerAnswer = 'Yoda';
  expect(player).toEqual({
    allAnswer: 5,
    rightAnswer: 3,
    playerAnswer: 'Yoda',
  });
});

it('should change playerAnswer after using playerChose method', () => {
  const player = new PlayerHuman();
  player.allAnswer = 0;
  player.rightAnswer = 0;
  player.playerAnswer = '';
  player.playerChose('Palpatine');
  expect(player).toEqual({
    allAnswer: 0,
    rightAnswer: 0,
    playerAnswer: 'Palpatine',
  });
});

it('should change value of allAnswer and correctAnswer if answerCounter mothods gets argument = true', () => {
  const player = new PlayerHuman();
  player.allAnswer = 0;
  player.rightAnswer = 0;
  player.playerAnswer = 'Yoda';
  player.answerCounter(true);
  expect(player).toEqual({
    allAnswer: 1,
    rightAnswer: 1,
    playerAnswer: 'Yoda',
  });
});

it('should restore values to default', () => {
  const player = new PlayerHuman();
  player.allAnswer = 5;
  player.rightAnswer = 3;
  player.playerAnswer = 'Yoda';
  player.restoreDefault();
  expect(player).toEqual({
    allAnswer: 0,
    rightAnswer: 0,
    playerAnswer: '',
  });
});

it('should change value of allAnswer and correctAnswer if answerCounter mothods gets argument = true and set new playerAnswer', () => {
  document.body.innerHTML = `
    <div class="questions">
      <div class="questions_item">Palpatine</div>
    </div>
    `;
  const clickers = document.querySelector('.questions_item');
  const player = new PlayerHuman();
  player.allAnswer = 0;
  player.rightAnswer = 0;
  player.playerAnswer = '';
  playerUpdate(clickers, true);
  expect(player).toEqual({
    allAnswer: 1,
    rightAnswer: 1,
    playerAnswer: 'Palpatine',
  });
});
