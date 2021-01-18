import 'regenerator-runtime/runtime'; //async/await with Parcel
import generadeRandomQuestions from '../generateQuestion/generateQuestion.js';
import { cpu } from '../playerCPU/playerCPU.js';

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