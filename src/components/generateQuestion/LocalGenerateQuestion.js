import 'regenerator-runtime/runtime' //async/await with Parcel
import questionToAnswer from '../questionToAnswer/questionToAnswer'
import renderQuestions from '../questionToAnswer/renderQuestions';


function generadeRandomQuestions(answerAfterClickedQuestion) {

    const urlPeopleRequest = 'http://localhost:3000/people/';
    const urlVehiclesRequest = 'http://localhost:3000/vehicles/';
    const urlStarshipsRequest = 'http://localhost:3000/starships/';

    const randomId = (data) => {
        const randomizator = Math.floor(Math.random() * (data.length - 1) + 1);
        return randomizator;
    };

    const rndArrayOfIds = (arr, arr2) => {
        while (arr.length < 4) {
            let id = arr2[randomId(arr2)];
            if (!arr.includes(id)) {
                arr.push(id);
            }
        }
        return arr;
    };

    async function getNames(arr, basicUrl) {
        const names = await Promise.all(
            arr.map(async (num) => {
                const response = await fetch(basicUrl + num + '/');
                const fullObject = await response.json();
                return {name: fullObject.name, image: fullObject.image};
            }),
        );
        return names;
    }

    async function createSWobject(url) {
        const mode = 'people';
        const questions = {
            image: '',
            answers: [],
            rightAnswer: '',
        };
        let data;
        let numOfRes;
        let fourAnswers = [];
        try {
            const responsePeople = await fetch(url);
            data = await responsePeople.json();
            numOfRes = data.length;
            const apiIds = data.map(element => element.id);
            const rndIds = rndArrayOfIds(fourAnswers, apiIds);
            const correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            const namesArr = await getNames(rndIds, url);
            const justNames = namesArr.map(element => element.name);
            questions.answers = justNames;
            questions.rightAnswer = justNames[rndIds.indexOf(correctAns)];
            const correctObj = namesArr[rndIds.indexOf(correctAns)];
            questions.image = correctObj.image;
            console.log(questions);
            return questions;
        } catch (error) {
            console.log(error);
        }
    }

    function checkMode(mode) {
        switch (mode.toLowerCase()) {
            case 'people':
                return createSWobject(urlPeopleRequest);
            case 'vehicles':
                return createSWobject(urlVehiclesRequest);
            case 'starships':
                return createSWobject(urlStarshipsRequest);
        }
    }
    // renderuje puste odpowiedzi
    renderQuestions();
    // startuje funkcję z wybranego 'mode' wraz z wylosowanymi pytaniami. Obiekt przekazywany w argumencie.
    checkMode('people').then(e => {
        // funkcja wyswietla odpowiedzi na stronie
        questionToAnswer(e, answerAfterClickedQuestion)
    });
}
export default generadeRandomQuestions;
