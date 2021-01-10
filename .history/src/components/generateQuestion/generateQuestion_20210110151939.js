import 'regenerator-runtime/runtime' //async/await with Parcel
import questionToAnswer from '../questionToAnswer/questionToAnswer'
import renderQuestions from '../questionToAnswer/renderQuestions';

function generadeRandomQuestions(answerAfterClickedQuestion) {
    
    // zrobic if answerAfterClickedQuestion jest true to przekazac argument to questionToAnswer bo na poczatku jest undefinde

    console.log(answerAfterClickedQuestion)
    const test = {}
    const vehiclesArrayImg = [
        4,
        6,
        7,
        8,
        14,
        16,
        18,
        19,
        20,
        24,
        25,
        26,
        30,
        33,
        34,
        35,
        36,
        37,
        38,
        42,
    ];
    const starshipArrayImg = [
        5,
        9,
        10,
        11,
        12,
        13,
        15,
        21,
        22,
        23,
        27,
        28,
        29,
        31,
        39,
        40,
        41,
        43,
        47,
        48,
    ];

    const urlPeopleRequest = 'https://swapi.dev/api/people/';
    const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/';
    const urlStarshipsRequest = 'https://swapi.dev/api/starships/';

    const arrayIds = (num) => {
        const idArray = [];
        for (let i = 1; idArray.length < num; i++) {
            if (i !== 17) {
                idArray.push(i);
            } else {
                continue;
            }
        }
        return idArray;
    };

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
                return fullObject.name;
            }),
        );
        return names;
    }

    const getImg = (mode, id) => {
        const imgQuestion = `${mode}/${id}.jpg`;
        return imgQuestion;
    };

    async function createPeopleObject(url) {
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
            numOfRes = data.count;
            const apiIds = arrayIds(numOfRes);
            const rndIds = rndArrayOfIds(fourAnswers, apiIds);
            const correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            const namesArr = await getNames(rndIds, url);
            questions.answers = namesArr;
            questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
            questions.image = getImg(mode, correctAns);
            return questions;
        } catch (error) {
            console.log(error);
        }
    }

    async function createStarshipsObject(url) {
        const mode = 'starships';
        const questions = {
            image: '',
            answers: [],
            rightAnswer: '',
        };
        let fourAnswers = [];
        try {
            const apiIds = starshipArrayImg;
            const rndIds = rndArrayOfIds(fourAnswers, apiIds);
            const correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            const namesArr = await getNames(rndIds, url);
            questions.answers = namesArr;
            questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
            questions.image = getImg(mode, correctAns);
            return questions;
        } catch (error) {
            console.log(error);
        }
    }

    async function createVehiclesObject(url) {
        const mode = 'vehicles';
        const questions = {
            image: '',
            answers: [],
            rightAnswer: '',
        };
        let fourAnswers = [];
        try {
            const apiIds = vehiclesArrayImg;
            const rndIds = rndArrayOfIds(fourAnswers, apiIds);
            const correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
            const namesArr = await getNames(rndIds, url);
            questions.answers = namesArr;
            questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
            questions.image = getImg(mode, correctAns);
            return questions;
        } catch (error) {
            console.log(error);
        }
    }

    function checkMode(mode) {
        switch (mode.toLowerCase()) {
            case 'people':
                return createPeopleObject(urlPeopleRequest);
            case 'vehicles':
                return createVehiclesObject(urlVehiclesRequest);
            case 'starships':
                return createStarshipsObject(urlStarshipsRequest);
        }
    }
    // renderuje puste odpowiedzi
    renderQuestions();
    // startuje funkcję z wybranego 'mode' wraz z wylosowanymi pytaniami. Obiekt przekazywany w argumencie.
    checkMode('vehicles').then(e => {
        // funkcja wyswietla odpowiedzi na stronie
        questionToAnswer({answer:['1']}, answerAfterClickedQuestion)
    });
}
export default generadeRandomQuestions;
