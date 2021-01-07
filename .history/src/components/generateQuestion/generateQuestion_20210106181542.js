// const questions = {
//   image: '',
//   answers: [],
//   rightAnswer: '',
// };

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
// PYTANIE DO PIOTRKA: CZY DA SIĘ WYCIĄGNĄĆ DANE Z API POZA FUNKCJĘ ASYNC?

async function getNames(arr, basicUrl) {
  const names = await Promise.all(
    arr.map(async (num) => {
      const response = await fetch(basicUrl + num + '/');
      const fullObject = await response.json();
      return fullObject.name;
    }),
  );
  // console.log(names);
  return names;
}

const getImg = (id) => {
  const imgQuestion = `people/${id}.jpg`;
  // console.log(imgQuestion);
  return imgQuestion;
};

async function getNumberOfResults(url) {
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
    // console.log(apiIds);
    const rndIds = rndArrayOfIds(fourAnswers, apiIds);
    const correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];

    // console.log(correctAns, rndIds);
    const namesArr = await getNames(rndIds, url);
    questions.answers = namesArr;
    questions.rightAnswer = namesArr[rndIds.indexOf(correctAns)];
    questions.image = getImg(correctAns);
    console.log(questions);
    // console.log();
    // console.log(correctAns,namesArr, questions);
    return questions;
  } catch (error) {
    console.log(error);
  }
}
getNumberOfResults(urlPeopleRequest).then(e=>{
  document.getElementById('swquiz-app').innerHTML = `
  <img src="../../../static/assets/img/modes/${e.image}" >
  `
});
