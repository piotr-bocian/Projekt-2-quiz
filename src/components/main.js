
import {timerComponent} from './loader/loader.js'
//Funkcja przyjmuje dwa argumenty:
// 1. module => callback z templatka html
// 2. selector => wyzwalacz
export const renderFn = (module, selector) => {
  const place = document.querySelector(selector);
  place.addEventListener('click', module);
};
// renderFn(timerComponent, '.btn')
