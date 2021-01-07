// import 'regenerator-runtime/runtime' //async/await with Parcel

class PlayerCPU {
    constructor() {
        this.noOfQuestions = 0;
        this.noOfAnswers = 0;
        this.questionAsked = false;
        this.questionAnswerd = false;
        this.answer = '';
    }

    askQuestion() {

        return question;
    }

    answerQuestion(question) {
        const cpuRandomPicked = Math.floor(Math.random()*4);
        const cpuAnswer = question[cpuRandomPicked];
        this.questionAnswerd = true;
        this.noOfAnswers += 1;
        this.answer = cpuAnswer;
    }
}

const cpu = new PlayerCPU();

cpu.answerQuestion(['Siara', 'Killer', 'Wąski', 'Ryba']);
console.log(cpu);


// Napisać klasę zawierającą to co powinien zawierać obiekt, z funkcjami aksQuestion
// answerQuestion.
// Potem napisać funkcję, która w wyniku kliknięcia btn 'playTheGame' tworzy nowy obiekt
// 'autoPlayer'



    // const func = playerCPU(['Siara', 'Killer', 'Wąski', 'Ryba']);
// console.log(func);

// funkcja zadaj pytanie - eventListener('change') na divie wywoła funkcje getAnswers, która
// pobierze z diva 4 możliwe odp do tablicy i potem zostanie wywołana funkcja answerQestion,
// losująca odpowiedź i zwracająca ale gdzie? do funkcji sprawdzającej czy odp poprawna?

