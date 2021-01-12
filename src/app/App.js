//aktywuj linijke niżej dla wersji lokalnej
// import generadeRandomQuestions from '../components/generateQuestion/LocalGenerateQuestion';
import generadeRandomQuestions from '../components/generateQuestion/generateQuestion';
import {
  startGameCPU,
  cpu,
  answerAgain,
} from '../components/playerCPU/playerCPU';
export const App = ({ options }) => {
  const playGameButton = document.getElementById('play');
  playGameButton.addEventListener('click', () => {
    console.log('click');
    playGameButton.classList.add('display-none');
    generadeRandomQuestions();
    setTimeout(function () {
      startGameCPU();
    }, 300);
  });
};
