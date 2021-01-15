function modalWindowContent(playerCorrect, playerAll, computerCorrect, computerAll){

    const gameOver = document.createElement("div");
    gameOver.className = "game-over";

    const title = document.createElement("h1");
    title.className = "game-over";
    title.innerHTML = "GAME OVER";
    gameOver.appendChild(title);

    const text = document.createElement("p");
    text.className = "game-over";
    text.innerHTML = `The force is strong in you young Padawan! During 1 minute you have answered ${playerCorrect} / ${playerAll} questions. And Google quessed ${computerCorrect} / ${computerAll}.`
    gameOver.appendChild(text);


    const results = document.createElement("div");
    results.className = "results";

    const resultTitle = document.createElement("h2");
    resultTitle.innerHTML = "Detailed answers"
    results.appendChild(resultTitle);

    const resultsList = document.createElement("div");
    results.appendChild(resultsList);
    const table = document.createElement('table');
    table.appendChild(resultsList);



    const yoda = document.createElement("div");
    yoda.className = "yoda";
    const src = "../../../static/assets/ui/MasterYodaLeft.png"
    yoda.setAttribute('src', src);


    const input = document.createElement("div");
    input.className = "input";
    const player = document.createElement("input");
    player.type = "text";
    player.required;
    player.size = 20;
    player.id = "player-input"
    input.appendChild(player);
    const fillName = document.createElement("div");
    fillName.innerHTML = "Please fill your name in order to receive eternal glory in the whole Galaxy!";
    input.appendChild(fillName);


    const forceBtn = document.createElement("div");
    forceBtn.className = "force-button";
    const btn = document.createElement("button");
    btn.innerHTML = "MAY THE FORCE BE WITH YOU";
    forceBtn.appendChild(btn);

    let yourInput = document.getElementById('player-input');

    btn.addEventListener('click', () => {
        var input = yourInput.value;
        let obj = new Object();
        if (player) {
            obj[input] = input;
            obj.playerCorrect = playerCorrect.value;
            obj.playerAll = playerAll.value;
        } else {
            return; //throw error
        }
    })
    return obj;

}