// FUNKCJA TEMPLATE

//CZY POTRZEBNE???
//1. template question
{
  /* <div class="title">
            <p>Who is this character?</p> // tutaj
         </div> */
}
const titleTemplate = (question) => {
  const container = document.querySelector('.title');
  const pInject = `<p>${question}</p>`;
  container.innerHTML = pInject;
};

//2. template answers, JAK DYNAMICZNIE ROZWIACAĆ ANSWEAR???
{
  /* <div class="answear1">
               <p>Luke Skywalker</p> //tutaj
            </div>
            <div class="answear2">
               <p>Jar Jar Binks</p> //tutaj
            </div>
            <div class="answear3">
               <p>Padme Amidala</p> // tutaj
            </div>
            <div class="answear4">
               <p>Darth Vader</p> // tutaj
            </div> */
}
const answearTemplate = (obj) => {
  const container = document.querySelector('.answear');
  const pInject = `<p>${obj.name}</p>`;
  container.innerHTML = pInject;
};

//3. Ranking
{
  /* <ul class="ranking-people">
                  <li class="bold">Player</li>
                  <li>Ania</li>
                  <li>Mateusz</li>
                  <li>Leia Organa</li>
               </ul> */
}

{
  /* <ul class="ranking-score">
                  <li class="bold">Answered</li>
                  <li>15/20</li>
                  <li>14/30</li>
                  <li>1/23</li>
               </ul> */
}

const rankingTemplate = (name) => {
  const container = document.querySelector('.ranking-people');
  const liInject = `<li>${name}</li>`;
  container.innerHTML = liInject;
};

//SKONCZONA
// 4. Img
{
  /* <div class="img-container">
            <img src="static\assets\img\modes\people\36.jpg" alt="Jar Jar Binks"> // tutaj
            <img src="../../../../static/assets/img/modes/${obj.type}/${obj.id}.jpg" >
         </div> */
}
//wolno przełączają się obrazki
const imgTemplate = (obj) => {
  const imgInject = `<img src="../../../../static/assets/img/modes/${obj.type}/${obj.id}.jpg" >`;
  const helloThere = `<img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB19TMlr.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f&x=1009&y=248">`;
  const container = document.querySelector('.img-container');
  const vehiclesArrayImg = [
    4,
    6,
    7,
    8,
    14,
    16,
    18,
    19,
    20,
    24,
    25,
    26,
    30,
    33,
    34,
    35,
    36,
    37,
    38,
    42,
  ];
  const starshipArrayImg = [
    5,
    9,
    10,
    11,
    12,
    13,
    15,
    21,
    22,
    23,
    27,
    28,
    29,
    31,
    39,
    40,
    41,
    43,
    47,
    48,
  ];
  obj.type === 'people' ||
  vehiclesArrayImg.includes(obj.id) ||
  starshipArrayImg.includes(obj.id)
    ? (container.innerHTML = imgInject)
    : (container.innerHTML = helloThere);
};
