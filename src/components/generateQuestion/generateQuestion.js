  const questions = {
    "image": "",
    "answers": [],
    "rightAnswer": ""
  }

  const urlPeopleRequest = 'https://swapi.dev/api/people/';
  const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/';
  const urlStarshipsRequest = 'https://swapi.dev/api/starships/';

const arrayIds = (num) => {
    const idArray = [];
    for(let i = 1; i <= num; i++) {
        idArray.push(i);
    }
    return idArray;
}

  
const randomId = (data) => {
        const randomizator = Math.floor(Math.random() * data.length);
        return randomizator;
}

const rndArrayOfIds = (arr, arr2) => {
    while(arr.length < 4) {
        let id = randomId(arr2);
        if (!arr.includes(id)) {
            arr.push(id);
        }
    }    
    return arr;
}

async function getNumberOfResults(url) {
    let data;
    let numOfRes;
    let fourAnswers = [];
    try {
        const responsePeople = await fetch(url);
        data = await responsePeople.json();
        numOfRes = data.count;
        const apiIds = arrayIds(numOfRes);
        const rndIds = rndArrayOfIds(fourAnswers, apiIds);
        console.log(rndIds.length);
        return rndIds;
    } catch (error) {
      console.log(error);
    }

  }

getNumberOfResults(urlPeopleRequest);

  