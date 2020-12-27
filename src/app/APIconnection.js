//dodałem to tylko po to żeby nie zaglądać co chwila do consoli i sprawdzić czy ładnie pobiera img, ustawione na People

//dodałem obj.type żeby ścieżka do katalogu ze zdjęciami zmianiała się dynamicznie
//PROBLEM - w katalogach jest mniej zdjęć niż obiektów w api, z tego powodu zwraca error 404
//działa prawidłowo jedynie dla people
function addingEl(obj) {
  const htmlSegment = `<div class="user">
                           <h1>${obj.name}</h1>
                            <img src="../../../../static/assets/img/modes/${obj.type}/${obj.id}.jpg" >
                        </div>`;

  const container = document.getElementById('swquiz-app');
  container.innerHTML = htmlSegment;
}

// Pytania są generowane w następujący sposób:
// zostaje pobrany losowy zasób z danego trybu (np people o id 5)
// zostanie pobrane dla wylosowanego zasobu zdjęcie
// losowane są 3 odpowiedzi z zapytania do StarWars API. Dla trybu "People" będzie to: https://swapi.co/api/people (jedna brana jest z wcześniej wylosowanego, musi być poprawna)

//TRZEBA NAPISAĆ TESTY!!!!!!!!!!!

// fetch zwróci tablice z Promise, nas interesują jej results - tablica z obiektami,
//w tablicy włściwość name oraz url, z url pobieramy id. Mając ID dobierzemy odpowiednie zdjęcie do wyświetlenia.

//PROBLEM: ID STATKOW I POJAZDOW JEST DZIURAWE!!!
//losowanie strony jest lepsze niz jazda po ID jak przy people bo tutaj mamy często puste ID i zwraca błąd 404, losujemy strony z zakresu 1-5 (5 jest nieosiagalna przy math random wiec zatrzyma się na 4), wchodzimy w .results i odstajemy tablice z obiektami, potem wystarczy wylosować index i pobrać jego name. Mamy losowść.

// Wydaje mi się, że pojawi się tutaj problem powtarzalności tak pobranych danych tzn moglibyśmy pobrać 3 odpowiedzi z api z czego dwie lub wszystkie byłyby identyczne i trzeba temu jakoś zaradzić. Dodatkowy problem to odświeżanie strony i pobieranie danych na nowo

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
  //
  const getUrl = rawData.results[randomIndex].url;
  //wyciąga typ : people || vehicles || starships z url
  const type = getUrl.split('/')[getUrl.split('/').length - 3];
  console.log(type);
  const getId =
    parseInt(getUrl.slice(-3, -1)) || parseInt(getUrl.slice(-2, -1));
  const completeData = {
    name: swName,
    id: getId,
    films: swFilm,
    type: type
  };
  return completeData;
}

getNameAndId(urlStarshipsRequest).then((val) => addingEl(val));
