
//dodałem to tylko po to żeby nie zaglądać co chwila do consoli
function addElement (text, zmienna) {
   const newDiv = document.createElement("p");
   const newContent = document.createTextNode(`${text}=====>${zmienna}`);
   newDiv.appendChild(newContent);
   const currentDiv = document.getElementById("swquiz-app");
   document.body.insertBefore(newDiv, currentDiv);
 }


const el = document.createElement("div");
// Pytania są generowane w następujący sposób:
// zostaje pobrany losowy zasób z danego trybu (np people o id 5)
// zostanie pobrane dla wylosowanego zasobu zdjęcie
// losowane są 3 odpowiedzi z zapytania do StarWars API. Dla trybu "People" będzie to: https://swapi.co/api/people (jedna brana jest z wcześniej wylosowanego, musi być poprawna)

//TRZEBA NAPISAĆ TESTY!!!!!!!!!!!
//people max index = 83
//będziemy losować id z zakresu 1-84 i pobierać właściwość name
const urlPeopleRequest = 'https://swapi.dev/api/people/';

//PROBLEM: ID STATKOW I POJAZDOW JEST DZIURAWE!!!
//losowanie strony jest lepsze niz jazda po ID jak przy people bo tutaj mamy często puste ID i zwraca błąd 404, losujemy strony z zakresu 1-5 (5 jest nieosiagalna przy math random wiec zatrzyma się na 4), wchodzimy w .results i odstajemy tablice z obiektami, potem wystarczy wylosować index i pobrać jego name. Mamy losowść.

// Pojawia się jednak problem powtarzalności tak pobranych danych tzn moglibyśmy pobrać 3 odpowiedzi z api z czego dwie lub wszystkie byłyby identyczne i trzeba temu jakoś zaradzić
const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/?page=';
const urlStarshipsRequest ='https://swapi.dev/api/starships/?page=';


const randomUrlPeopleRequest = (url)=>{
   const randomizator = Math.floor(Math.random()*(84-1) + 1);
   return `${url}${randomizator}`
}
const randomUrlVehicleStarshipRequest = (url)=>{
   const randomizator = Math.floor(Math.random()*(5-1) + 1);
   return `${url}${randomizator}`
}

//teraz jest bez sensu bo powtarzam kod więc trzeba to uprościć
fetch(randomUrlPeopleRequest(urlPeopleRequest))
.then(res=> res.json()
)
.then(data=>{
   addElement ('Postać', data.name)
   return console.log('Postać: ' + data.name);
})

fetch(randomUrlVehicleStarshipRequest(urlStarshipsRequest))
.then(res=> {
   return res.json()
}
)
.then(data=>{
   const randomIndex = Math.floor(Math.random()*data.results.length);
   const randomStarshipName = data.results[randomIndex].name;
   addElement ('Statek kosmiczny',randomStarshipName);
   return console.log('Statek kosmiczny: ' + randomStarshipName);
})

fetch(randomUrlVehicleStarshipRequest(urlVehiclesRequest))
.then(res=> {
   return res.json()
}
)
.then(data=>{
   const randomIndex = Math.floor(Math.random()*data.results.length);
   const randomVehicleName = data.results[randomIndex].name;
   addElement ('Pojazd',randomVehicleName);
   return console.log('Pojazd: ' + randomVehicleName);
})
