// import 'regenerator-runtime/runtime' //async/await with Parcel

const answerQuestion = (question) => {
    const cpuRandomPicked = Math.floor(Math.random()*4);
    const cpuAnswer = question[cpuRandomPicked];
    return cpuAnswer;
}

function playerCPU (question) {
    const autoPlayer = {
        answer: "answer",

    }

    const playerCPUanswer = answerQuestion(question);
    autoPlayer.answer = playerCPUanswer;

    return autoPlayer;
    }

const func = playerCPU(['Siara', 'Killer', 'Wąski', 'Ryba']);
console.log(func);

// funkcja zadaj pytanie - eventListener('change') na divie wywoła funkcje getAnswers, która
// pobierze z diva 4 możliwe odp do tablicy i potem zostanie wywołana funkcja answerQestion,
// losująca odpowiedź i zwracająca ale gdzie? do funkcji sprawdzającej czy odp poprawna?
