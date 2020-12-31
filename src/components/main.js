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
// 1. callback z templatka html
// 2. string reprezentujacy pozycje: beforebegin || domyślnie - afterbegin || beforeend || afterend
const renderFunction = (module, place = 'afterbegin') => {
  let htmlTemplate = `${module}`;
  document.body.insertAdjacentHTML(`${place}`, htmlTemplate);
};

renderFunction(titleTemplate('Co robisz?'), 'afterbegin');
renderFunction(answearTemplate());
renderFunction(rankingTemplate(rankingPeople));
renderFunction(imgTemplate(), 'afterbegin');

export { renderFunction };
