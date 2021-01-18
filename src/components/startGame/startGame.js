import generadeRandomQuestions from '../generateQuestion/generateQuestion';
import { cpu } from '../playerCPU/playerCPU';

const playGameButton = document.querySelector('.red-button');
const yellowButton = document.querySelector('.yellow-button');
const hallOfGame = document.querySelector('.hall-of-fame-btn');
playGameButton.addEventListener('click', () => {
  playGameButton.classList.add('display-none');
  yellowButton.classList.add('display-none');
  hallOfGame.classList.add('display-none');
  cpu.restoreDefault();
  generadeRandomQuestions(true);
});