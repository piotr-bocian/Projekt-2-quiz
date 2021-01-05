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
        if(i !== 17) {
        idArray.push(i);
        } else {
            continue;
        }
    }
    return idArray;
}

  
const randomId = (data) => {
        const randomizator = Math.floor(Math.random() * data.length + 1);
        return randomizator;
}

const rndArrayOfIds = (arr, arr2) => {
    while(arr.length < 4) {
        let id = arr2[randomId(arr2)];
        if (!arr.includes(id) || id !== 17) {
            arr.push(id);
        }
    }    
    return arr;
}
// PYTANIE DO PIOTRKA: CZY DA SIĘ WYCIĄGNĄĆ DANE Z API POZA FUNKCJĘ ASYNC?

async function getNames(arr, basicUrl) {
    const names = await Promise.all(
      arr.map(async (num) => {
        const response = await fetch(basicUrl+num + "/");
        const fullObject = await response.json();
        return fullObject.name;
      }),
    );
    // console.log(names);
    return names;
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
        console.log(apiIds);
        const rndIds = rndArrayOfIds(fourAnswers, apiIds);
        const correctAns = rndIds[Math.floor(Math.random() * rndIds.length)];
        console.log(correctAns, rndIds);
        const namesArr = await getNames(rndIds, url)
        questions.answers = namesArr;

        console.log(namesArr);
    } catch (error) {
      console.log(error);
    }

  }

getNumberOfResults(urlPeopleRequest);


  