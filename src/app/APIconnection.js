
//próba, loguje dane z api

//people max index = 83/
const urlPeopleRequest = 'https://swapi.dev/api/people/';
const randomUrlPeopleRequest = (url)=>{
   const randomizator = Math.floor(Math.random()*84);
   return `${url}${randomizator}/`
}

//dla pojadow 76
const urlVehiclesRequest = 'https://swapi.dev/api/vehicles/';
// 75 dla statków
const urlStarshipsRequest ='https://swapi.dev/api/starships/';


//losowa postac pobrana z api/losowy url/PROBLEM wypada 0
fetch(randomUrlPeopleRequest(urlPeopleRequest))
.then(res=> res.json()
)
.then(data=>{
   return console.log(data.name);
})
