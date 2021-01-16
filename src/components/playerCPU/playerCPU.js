class PlayerCPU {
    constructor() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
        this.allImageArr = [];
        this.allCpuAnswers = [];
        this.allCorrectAnswers = [];
    }

    answerQuestion(arrWithAns, image, correctAnswers) {
        const question = [...arrWithAns];
        this.allImageArr.push(image);
        const cpuRandomPicked = Math.floor(Math.random()*4);
        const cpuAnswer = question[cpuRandomPicked];;
        // this.noOfAnswers +=1;
        this.answer = cpuAnswer;
        this.allCpuAnswers.push(this.answer);
        this.allCorrectAnswers.push(correctAnswers)
        return this.answer;
    }

    restoreDefault() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }
}

const cpu = new PlayerCPU();

export { cpu };