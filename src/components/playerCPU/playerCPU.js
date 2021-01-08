// import 'regenerator-runtime/runtime' //async/await with Parcel

class PlayerCPU {
    constructor() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.questionAsked = false;
        this.questionAnswerd = false;
        this.answer = '';
    }

    askQuestion() {
        const question = [];
        const childDivs = document.getElementById('game').getElementsByTagName('div');
        for (let i = 0; i < childDivs.length; i++) {
            question.push(childDivs[i].innerText);
        }
        console.log(question);
        this.questionAsked = true;
        this.questionAnswerd = false;
        return question;
    }

    answerQuestion() {
        const question = this.askQuestion();
        const cpuRandomPicked = Math.floor(Math.random()*4);
        const cpuAnswer = question[cpuRandomPicked];
        this.questionAnswerd = true;
        this.questionAsked = false;
        this.noOfAnswers +=1;
        this.answer = cpuAnswer;
    }

    set qAsked(val) {
        this.questionAsked = val;
        this.answerQuestion();
    }
}

const createObjectCPU = () => {
    const cpu = new PlayerCPU();
    const gameAns = document.getElementById('game');
    gameAns.addEventListener('click', inputTxt);
    cpu.qAsked = true;
    console.log(cpu);
    return cpu;
}

function inputTxt(cpu) {
    const tab = ['Siara', 'Killer', 'Wąski', 'Ryba'];
    const rndPicked = Math.floor(Math.random()*4);
    const ans = tab[rndPicked];
    const div1 = document.getElementById('1');
    div1.textContent = ans;
    cpu.qAsked = true;
}


const playTheGameBtn = document.getElementById('p-t-g');
playTheGameBtn.addEventListener('click', createObjectCPU);

