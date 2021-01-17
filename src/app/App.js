//aktywuj linijke niżej dla wersji lokalnej
// import generadeRandomQuestions from '../components/generateQuestion/LocalGenerateQuestion';
import generadeRandomQuestions from '../components/generateQuestion/generateQuestion';
import { cpu } from '../components/playerCPU/playerCPU';

export const App = ({ options }) => {
  const playGameButton = document.querySelector('.red-button');
  const yellowButton = document.querySelector('.yellow-button');
  playGameButton.addEventListener('click', () => {
    playGameButton.classList.add('display-none');
    yellowButton.classList.add('display-none');
    cpu.restoreDefault();
    generadeRandomQuestions(true);
    
  });
};
