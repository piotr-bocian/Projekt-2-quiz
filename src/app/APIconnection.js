
//próba, loguje dane z api
const ul = document.getElementById('authors');
fetch('https://swapi.dev/api/people/', {method: 'GET'})
.then(res=> res.json()
)
.then(data=>{
   const characters = data.results;
   return characters.map(elm=>{
   console.log(elm.name)
   })
})
