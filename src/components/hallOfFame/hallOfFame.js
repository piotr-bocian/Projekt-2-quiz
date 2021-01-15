import getDefaultRanking from '../localStorage/localStorage.js';

function showHallOfFame(text){

    const fameContainer = document.createElement('div');
    fameContainer.classList.add('fame-container')
    
    const pFame = document.createElement('p');
    pFame.classList.add('fame-paragraph')
    pFame.innerText = text;

    fameContainer.appendChild(pFame);

    const ranking = document.createElement('div');
    ranking.classList.add('ranking');
    
    const mode = document.querySelector('mode-change').getCurrentMode();
    const rankingValues = JSON.parse(localStorage.getItem('ranking')) || getDefaultRanking();
    
    ranking.innerHTML = `
        <ul>
            <li class="bold">Place</li>
            <li>1st</li>
            <li>2nd</li>
            <li>3rd</li>
        </ul>

        <ul class="ranking-people">
            <li class="bold">Player</li>
            <li>${rankingValues[mode.toLowerCase()][0].nick}</li>
            <li>${rankingValues[mode.toLowerCase()][1].nick}</li>
            <li>${rankingValues[mode.toLowerCase()][2].nick}</li>
        </ul>

        <ul class="ranking-score">
            <li class="bold">Answered</li>
            <li>${rankingValues[mode.toLowerCase()][0].correctAnswers}/${rankingValues[mode.toLowerCase()][0].answers}</li>
            <li>${rankingValues[mode.toLowerCase()][1].correctAnswers}/${rankingValues[mode.toLowerCase()][1].answers}</li>
            <li>${rankingValues[mode.toLowerCase()][2].correctAnswers}/${rankingValues[mode.toLowerCase()][2].answers}</li>
        </ul>
    
    `

    fameContainer.appendChild(ranking);

    return fameContainer;
}

export default showHallOfFame;