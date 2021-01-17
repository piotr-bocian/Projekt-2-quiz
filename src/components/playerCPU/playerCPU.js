class PlayerCPU {
    constructor() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
        this.allImageArr = [];
        this.allCpuAnswers = [];
        this.allCorrectAnswers = [];
    }

    answerQuestion(arrWithAns) {
        const question = [...arrWithAns];
        const cpuRandomPicked = Math.floor(Math.random()*4);
        const cpuAnswer = question[cpuRandomPicked];;
        this.answer = cpuAnswer;
        return this.answer;
    }

    addDataToArrays(image, correctAnswers) {
        this.allImageArr.push(image);
        this.allCpuAnswers.push(this.answer);
        this.allCorrectAnswers.push(correctAnswers);
    }

    restoreDefault() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }
}

const cpu = new PlayerCPU();

export { cpu };