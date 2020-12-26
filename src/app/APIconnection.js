//dodałem to tylko po to żeby nie zaglądać co chwila do consoli i sprawdzić czy ładnie pobiera img, ustawione na People
function addingEl(obj) {
  const htmlSegment = `<div class="user">
                           <h1>${obj.name}</h1>
                            <img src="../../../../static/assets/img/modes/people/${obj.id}.jpg" >
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

//wpisanie na sztywno url do fetcha czy masz lepszy pomysł???
async function getData() {
  try {
    // const response = await fetch(randomUrlVehicleStarshipRequest(urlVehiclesRequest))
    // const response = await fetch(randomUrlPeopleRequest(urlStarshipsRequest))
    const response = await fetch(randomUrlPeopleRequest(urlPeopleRequest));
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(response.status);
  }
}

// ta funkcja jest w zasadzie uniwersalna
async function getNameAndId() {
  const rawData = await getData();
  const randomIndex = Math.floor(Math.random() * rawData.results.length);
  const randomPeopleName = rawData.results[randomIndex].name;
  const getUrl = rawData.results[randomIndex].url;
  //getID zwróci nam zawsze liczbę, przy 1-9 wyskoczy NaN
  const getId =
    parseInt(getUrl.slice(-3, -1)) || parseInt(getUrl.slice(-2, -1));
  const nameAndId = {
    name: randomPeopleName,
    id: getId,
  };
  console.log(nameAndId);
  addingEl(nameAndId);
  return nameAndId;
}
getNameAndId();
