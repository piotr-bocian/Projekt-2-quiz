
import generadeRandomQuestions from '../components/generateQuestion/generateQuestion.js';

export const App = ({options}) => {
    console.log(options)
    const playGameButton = document.getElementById("play");
        playGameButton.addEventListener('click', () => {
            console.log('click')
            playGameButton.classList.add('display-none');
        generadeRandomQuestions();
        });
}


