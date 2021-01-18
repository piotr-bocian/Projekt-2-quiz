// import 'regenerator-runtime/runtime'; //async/await with Parcel
import questionToAnswer from '../questionToAnswer/questionToAnswer.js';
import { cpu } from '../playerCPU/playerCPU.js';
import { vehiclesArrayImg, starshipArrayImg } from '../starshipsAndVehicles.js';
import { timerComponent } from '../loader/loader.js';

const urlPeopleRequest = 'https://swapi.dev/api/people/';
const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/';
const urlStarshipsRequest = 'https://swapi.dev/api/starships/';

export const arrayIds = (num) => {
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
export const randomId = (data) => {
  const randomizator = Math.floor(Math.random() * (data.length - 1) + 1);
  return randomizator;
};
export const rndArrayOfIds = (arr, arr2) => {
  while (arr.length < 4) {
    let id = arr2[randomId(arr2)];
    if (!arr.includes(id)) {
      arr.push(id);
    }
  }
  return arr;
};

export const getImg = (mode, id) => {
  const imgQuestion = `${mode}/${id}.jpg`;
  return imgQuestion;
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
    // console.log(questions);
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
    // console.log(questions);
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
    // console.log(questions);
    return questions;
  } catch (error) {
    console.log(error);
  }
}

export function checkMode(mode) {
  switch (mode.toLowerCase()) {
    case 'people':
      return createPeopleObject(urlPeopleRequest);
    case 'vehicles':
      return createVehiclesObject(urlVehiclesRequest);
    case 'starships':
      return createStarshipsObject(urlStarshipsRequest);
  }
}


const getGameMode = () => {
  const mode = document.querySelector("mode-change");
  return mode.currentMode;
}



function generadeRandomQuestions(trigger) {
  // startuje funkcję z wybranego 'mode' wraz z wylosowanymi pytaniami. Obiekt przekazywany w argumencie.
  checkMode(getGameMode()).then((e) => {
    cpu.answerQuestion(e.answers);
    // funkcja wyswietla odpowiedzi na stronie
    questionToAnswer(e);
    if(trigger){
      timerComponent();
    }
  });
}
export default generadeRandomQuestions;
