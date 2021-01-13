class PlayerCPU {
    constructor() {
        this.noOfAnswers = 0;
        this.correctAnswers = 0;
        this.answer = '';
    }

    answerQuestion(arrWithAns) {
        const question = [...arrWithAns];
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

// const startGameCPU = () => {
//     cpu.restoreDefault();
//     return cpu;
// }

export { cpu };
// export {cpu, startGameCPU};