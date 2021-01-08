function showHallOfFame(text){

    const fameContainer = document.createElement('div');
    fameContainer.classList.add('fame-container')
    
    const pFame = document.createElement('p');
    pFame.classList.add('fame-paragraph')
    pFame.innerText = text;

    fameContainer.appendChild(pFame);

    return fameContainer;
}

export default showHallOfFame;