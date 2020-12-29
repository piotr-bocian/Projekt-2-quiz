//PROBLEM - w katalogach jest mniej zdjęć niż obiektów w api, z tego powodu zwraca error 404

const addingEl = (obj) => {
  console.log(obj);
  const htmlSegmentAllData = `<div class="user">
                           <h1>${obj.name}</h1>
                            <img src="../../../../static/assets/img/modes/${obj.type}/${obj.id}.jpg" >
                        </div>`;
  const htmlSegmentNameOnly = `<div class="user">
                        <h1>${obj.name}</h1>
                     </div>`;
  const container = document.getElementById('swquiz-app');
  const vehiclesArrayImg = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];
  const starshipArrayImg = [5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];

  obj.type === 'people' || vehiclesArrayImg.includes(obj.id) || starshipArrayImg.includes(obj.id)
    ? (container.innerHTML = htmlSegmentAllData)
    : (container.innerHTML = htmlSegmentNameOnly);
};

//TRZEBA NAPISAĆ TESTY!!!!!!!!!!!

const urlPeopleRequest = 'https://swapi.dev/api/people/?page=';
const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/?page=';
const urlStarshipsRequest = 'https://swapi.dev/api/starships/?page=';

//losowanie url strony dla people oraz pojazdów i statków
const randomUrlPeopleRequest = (url) => {
  const randomizator = Math.floor(Math.random() * (10 - 1) + 1);
  return `${url}${randomizator}`;
};
const randomUrlVehicleStarshipRequest = (url) => {
  const randomizator = Math.floor(Math.random() * (5 - 1) + 1);
  return `${url}${randomizator}`;
};

async function getData(url) {
  let data;
  try {
    if (url.includes('people')) {
      const responsePeople = await fetch(randomUrlPeopleRequest(url));
      data = responsePeople.json();
    } else {
      const responsVehiclesStarships = await fetch(
        randomUrlVehicleStarshipRequest(url),
      );
      data = responsVehiclesStarships.json();
    }
    return await data;
  } catch (error) {
    console.log(response.status);
  }
}

async function getNameAndId(url) {
  const rawData = await getData(url);
  const randomIndex = Math.floor(Math.random() * rawData.results.length);
  const swName = rawData.results[randomIndex].name;
  //opcjonalnie
  const swFilm = await Promise.all(
    rawData.results[randomIndex].films.map(async (film) => {
      const response = await fetch(film);
      const movie = await response.json();
      return movie.title;
    }),
  );

  const getUrl = rawData.results[randomIndex].url;
  //wyciąga typ : people || vehicles || starships z url
  const type = getUrl.split('/')[getUrl.split('/').length - 3];
  const getId =
    parseInt(getUrl.slice(-3, -1)) || parseInt(getUrl.slice(-2, -1));
  const completeData = {
    name: swName,
    id: getId,
    films: swFilm,
    type: type,
  };
  return completeData;
}

getNameAndId(urlVehiclesRequest).then((val) => addingEl(val));
