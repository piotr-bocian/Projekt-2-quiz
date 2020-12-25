
//dodałem to tylko po to żeby nie zaglądać co chwila do consoli
function addElement (text, zmienna, id) {
   const newDiv = document.createElement("p");
   const newContent = document.createTextNode(`${text}=====>${zmienna}====> ID = ${id}`);
   newDiv.appendChild(newContent);
   const currentDiv = document.getElementById("swquiz-app");
   document.body.insertBefore(newDiv, currentDiv);
 }
// Pytania są generowane w następujący sposób:
// zostaje pobrany losowy zasób z danego trybu (np people o id 5)
// zostanie pobrane dla wylosowanego zasobu zdjęcie
// losowane są 3 odpowiedzi z zapytania do StarWars API. Dla trybu "People" będzie to: https://swapi.co/api/people (jedna brana jest z wcześniej wylosowanego, musi być poprawna)

//TRZEBA NAPISAĆ TESTY!!!!!!!!!!!

//people max index = 83
//będziemy losować id z zakresu 1-84 i pobierać właściwość name
//by ujednolicić zapis people wyszukujemy i pobieramy jak pozostałe dane

// fetch zwróci tablice z Promise, nas interesują jej results - tablica z obiektami,
//w tablicy włściwość name oraz url, z url pobieramy id. Mając ID dobierzemy odpowiednie zdjęcie do wyświetlenia.


//PROBLEM: ID STATKOW I POJAZDOW JEST DZIURAWE!!!
//losowanie strony jest lepsze niz jazda po ID jak przy people bo tutaj mamy często puste ID i zwraca błąd 404, losujemy strony z zakresu 1-5 (5 jest nieosiagalna przy math random wiec zatrzyma się na 4), wchodzimy w .results i odstajemy tablice z obiektami, potem wystarczy wylosować index i pobrać jego name. Mamy losowść.


// Wydaje mi się, że pojawi się tutaj problem powtarzalności tak pobranych danych tzn moglibyśmy pobrać 3 odpowiedzi z api z czego dwie lub wszystkie byłyby identyczne i trzeba temu jakoś zaradzić. Dodatkowy problem to odświeżanie strony i pobieranie danych na nowo

const urlPeopleRequest = 'https://swapi.dev/api/people/?page=';
const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/?page=';
const urlStarshipsRequest ='https://swapi.dev/api/starships/?page=';

//losowanie url strony dla people oraz pojazdów i statków
const randomUrlPeopleRequest = (url)=>{
   const randomizator = Math.floor(Math.random()*(10-1) + 1);
   return `${url}${randomizator}`
}
const randomUrlVehicleStarshipRequest = (url)=>{
   const randomizator = Math.floor(Math.random()*(5-1) + 1);
   return `${url}${randomizator}`
}

//wystarczy jeden fetch???
//Masz pomysł jak to wszystko skrócić???
fetch(randomUrlPeopleRequest(urlPeopleRequest))
.then(res=> res.json()
)
.then(data=>{
      const randomIndex = Math.floor(Math.random()*data.results.length);
      const randomPeopleName = data.results[randomIndex].name;
      //pobierzemy ID, dzięki temu dopasujemu pobrane dane do img
      const getUrl = data.results[randomIndex].url;
      //getID zwróci nam zawsze liczbę, przy 1-9 wyskoczy NaN
      const getID = parseInt(getUrl.slice(-3, -1)) || parseInt(getUrl.slice(-2, -1));
      addElement ('Postać',randomPeopleName, getID);
      console.log('Postać: ' + randomPeopleName + ' ID: ' + getID);
   })

fetch(randomUrlVehicleStarshipRequest(urlStarshipsRequest))
.then(res=> {
   return res.json()
}
)
.then(data=>{
   const randomIndex = Math.floor(Math.random()*data.results.length);
   const randomStarshipName = data.results[randomIndex].name;
   const getUrl = data.results[randomIndex].url;
   const getID = parseInt(getUrl.slice(-3, -1)) || parseInt(getUrl.slice(-2, -1));
   addElement ('Statek kosmiczny',randomStarshipName, getID);
   return console.log('Statek kosmiczny: ' + randomStarshipName + ' ID: ' + getID);
})

fetch(randomUrlVehicleStarshipRequest(urlVehiclesRequest))
.then(res=> {
   return res.json()
}
)
.then(data=>{
   const randomIndex = Math.floor(Math.random()*data.results.length);
   const randomVehicleName = data.results[randomIndex].name;
   const getUrl = data.results[randomIndex].url;
   const getID = parseInt(getUrl.slice(-3, -1)) || parseInt(getUrl.slice(-2, -1));
   addElement ('Pojazd',randomVehicleName, getID);
   return console.log('Pojazd: ' + randomVehicleName + ' ID: ' + getID);
})
