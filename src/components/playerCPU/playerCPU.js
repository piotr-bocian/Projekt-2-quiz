// import 'regenerator-runtime/runtime' //async/await with Parcel

class PlayerCPU {
    constructor() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }

    askQuestion() {
        const question = [];
        const childDivs = [...document.querySelectorAll('.q')];
        for (let i = 0; i < childDivs.length; i++) {
            question.push(childDivs[i].innerText);
        }
        // console.log(question);
        return question;
    }
    
    answerQuestion() {
        const question = this.askQuestion();
        const cpuRandomPicked = Math.floor(Math.random()*4);
        const cpuAnswer = question[cpuRandomPicked];
        // console.log(cpuAnswer);
        this.questionAnswerd = true;
        this.questionAsked = false;
        this.noOfAnswers +=1;
        this.answer = cpuAnswer;
        return this.answer;
    }

    restoreDefault() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }

    set qAsked(val) {
        this.questionAsked = val;
        this.answerQuestion();
    }
}

const cpu = new PlayerCPU();

const startGame = () => {
    cpu.restoreDefault();
    cpu.answerQuestion();
    return cpu;
}




function inputTxt() {
    const tab = ['Siara', 'Killer', 'Wąski', 'Ryba'];
    const rndPicked = Math.floor(Math.random()*4);
    const ans = tab[rndPicked];
    const div1 = document.getElementById('1');
    div1.textContent = ans;
    cpu.qAsked = true;
    console.log(cpu);
}

const questionQuery = [...document.querySelectorAll('.q')];
questionQuery.map((element) => {
    element.addEventListener('click', inputTxt);
});

const playTheGameBtn = document.getElementById('p-t-g');
playTheGameBtn.addEventListener('click', startGame);

