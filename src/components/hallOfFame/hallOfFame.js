function showHallOfFame(text){

    const fameContainer = document.createElement('div');
    fameContainer.classList.add('fame-container')
    
    const pFame = document.createElement('p');
    pFame.classList.add('fame-paragraph')
    pFame.innerText = text;

    fameContainer.appendChild(pFame);

    const ranking = document.createElement('div');
    ranking.classList.add('ranking');
    ranking.innerHTML = `
        <ul>
            <li class="bold">Place</li>
            <li>1st</li>
            <li>2nd</li>
            <li>3rd</li>
        </ul>
        <ul class="ranking-people">
            <li class="bold">Player</li>
            <li>Ania</li>
            <li>Mateusz</li>
            <li>Leia Organa</li>
        </ul>
        <ul class="ranking-score">
            <li class="bold">Answered</li>
            <li>15/20</li>
            <li>14/30</li>
            <li>1/23</li>
        </ul>
    `

    fameContainer.appendChild(ranking);

    return fameContainer;
}

export default showHallOfFame;