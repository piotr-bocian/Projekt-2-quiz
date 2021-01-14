import { PlayerHuman } from '../src/components/playerHuman/playerHuman';

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
