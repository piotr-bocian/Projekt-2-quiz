class PlayerCPU {
    constructor() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }

    askQuestion() {
        const question = [];
        const childDivs = [...document.querySelectorAll('.questions_item')];
        for (let i = 0; i < childDivs.length; i++) {
            question.push(childDivs[i].innerText);
        }
        return question;
    }

    answerQuestion() {
        const question = this.askQuestion();
        const cpuRandomPicked = Math.floor(Math.random()*4);
        const cpuAnswer = question[cpuRandomPicked];;
        this.noOfAnswers +=1;
        this.answer = cpuAnswer;
        return this.answer;
    }

    restoreDefault() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }
}

const cpu = new PlayerCPU();

const startGameCPU = () => {
    cpu.restoreDefault();
    cpu.answerQuestion();
    return cpu;
}

export {cpu, startGameCPU};