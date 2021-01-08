
import checkMode from '../components/generateQuestion/generateQuestion.js';

export const App = ({options}) => {
    const playGameButton = document.getElementById("play"); 
    playGameButton.addEventListener('click', ()=>{
        checkMode
        console.log('test')
    });
}


