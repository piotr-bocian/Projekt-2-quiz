import generadeRandomQuestions from '../components/generateQuestion/generateQuestion.js';
import { cpu } from '../components/playerCPU/playerCPU.js';
import { mainMenu } from '../components/mainMenu/mainMenu.js';

export const App = ({ options }) => {
  mainMenu();
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
};
