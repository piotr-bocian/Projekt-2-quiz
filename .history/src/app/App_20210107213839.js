
import checkMode from '../components/generateQuestion/generateQuestion.js';

export const App = ({options}) => {
    const playGameButton = document.getElementById("play"); 
    playGameButton.addEventListener('click', ()=>{
        console.log('cli')
        checkMode();

    });
}


