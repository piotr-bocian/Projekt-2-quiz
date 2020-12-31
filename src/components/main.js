//do testowania
const titleTemplate = (question) => {
  const pInject = `<p>${question}</p>`;
  return pInject;
};
const answearTemplate = () => {
  const pInject = `<div class="answear1">
  <p>Luke Skywalker</p>
</div>
<div class="answear2">
  <p>Jar Jar Binks</p>
</div>
<div class="answear3">
  <p>Padme Amidala</p>
</div>
<div class="answear4">
  <p>Darth Vader</p>
</div>`;
  return pInject;
};
const rankingPeople = {
  firstPlace: 'Kasia',
  secondPlace: 'Basia',
  thirdPlace: 'Ania',
};
const rankingTemplate = (name) => {
  const liInject = `<ul class="ranking-people">
  <li class="bold">Player</li>
  <li>${name.firstPlace}</li>
  <li>${name.secondPlace}</li>
  <li>${name.thirdPlace}</li>
</ul>`;
  return liInject;
};
const imgTemplate = () => {
  const imgInject = `<img src="../../static/assets/img/modes/people/16.jpg" >`;
  return imgInject;
};

//Funkcja przyjmuje dwa argumenty:
// 1. module => callback z templatka html
// 2. selector => selektor html rodzica - miejsce dodania elementu
// 3. opt => string reprezentujacy pozycje: beforebegin || domyślnie - afterbegin || beforeend || afterend
const renderFunction = (module, selector, opt = 'afterbegin') => {
  let htmlTemplate = `${module}`;
  const place = document.querySelector(selector);
  place.insertAdjacentHTML(`${opt}`, htmlTemplate);
};

renderFunction(titleTemplate('Co robisz?'), '#swquiz-app');
renderFunction(imgTemplate(), '#swquiz-app');
renderFunction(answearTemplate(), '#swquiz-app');
renderFunction(rankingTemplate(rankingPeople), '.answear4');
