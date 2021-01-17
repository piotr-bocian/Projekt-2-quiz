import {
  PlayerHuman,
  playerUpdate,
} from '../src/components/playerHuman/playerHuman';

it('should create new player human', () => {
  const player = new PlayerHuman();
  player.allAnswer = 5;
  player.rightAnswer = 3;
  player.playerAnswer = 'Yoda';
  player.allPlayerAnswers = [];
  expect(player).toEqual({
    allAnswer: 5,
    rightAnswer: 3,
    playerAnswer: 'Yoda',
    allPlayerAnswers: [],
  });
});

it('should change playerAnswer after using playerChose method', () => {
  const mockCallback = jest.fn();
  mockCallback.mockReturnValue('Palpatine');
  const player = new PlayerHuman();
  player.allAnswer = 0;
  player.rightAnswer = 0;
  player.playerAnswer = '';
  player.allPlayerAnswers = [];
  player.playerChose(mockCallback());
  expect(player).toEqual({
    allAnswer: 0,
    rightAnswer: 0,
    playerAnswer: 'Palpatine',
    allPlayerAnswers: ['Palpatine'],
  });
});

it('should change value of allAnswer and correctAnswer if answerCounter mothods gets argument = true', () => {
  const mockCallback = jest.fn();
  mockCallback.mockReturnValueOnce(true);
  const player = new PlayerHuman();
  player.allAnswer = 0;
  player.rightAnswer = 0;
  player.playerAnswer = 'Yoda';
  player.allPlayerAnswers = ['Yoda'],
  player.answerCounter(mockCallback());
  expect(player).toEqual({
    allAnswer: 1,
    rightAnswer: 1,
    playerAnswer: 'Yoda',
    allPlayerAnswers: ['Yoda']
  });
});

it('should restore values to default', () => {
  const player = new PlayerHuman();
  player.allAnswer = 5;
  player.rightAnswer = 3;
  player.playerAnswer = 'Yoda';
  player.allPlayerAnswers = ['Yoda'],
  player.restoreDefault();
  expect(player).toEqual({
    allAnswer: 0,
    rightAnswer: 0,
    playerAnswer: '',
    allPlayerAnswers: []
  });
});

// it('should change playerAnswer and answer count', () => {
//   const player = new PlayerHuman();
//   player.allAnswer = 0;
//   player.rightAnswer = 0;
//   player.playerAnswer = 'Yoda';
//   document.body.innerHTML = '<div class="questions_item">Palpatine</div>'
//   const a = document.querySelector('div');
//   a.addEventListener('click', e =>{
//     expect(playerUpdate(e, true)).toContain('lipa')
//   })

// });
