// //Dynamiczne ładuje cały moduł do wskazanego miejsca po wykonaniu akcji
// // 1. place - selektor mijesca gdzie ma być załadowany moduł
// // 2. listenerSelector - selektor elementu na którym nasłuchujemy
// // 3. fileName - nazwa pliku z którego pobieramy moduł

// //////PROBLEM
// // 1. Nie działa podanie nazwy pliku, zgłąsza błąd MIME oraz Failed to fetch dynamically imported modul przy odpaleniu przez serwer

// const moduleLoader = (listenerSelector, folderName, fileName) => {
//   const moduleActivator = document.querySelector(listenerSelector);
//   moduleActivator.addEventListener('click', async (event) => {
//     event.preventDefault();
//     try {
//       const module = await import(`./${folderName}/${fileName}`);
//       //wywołanie pobranej funkcji z innego pliku
//       module.rankingTemplate();
//     } catch (e) {
//       console.log(e);
//     }
//   });
// };

// //moduleLoader('.btn', 'loader', 'loader.js');

// import {timerComponent} from './loader/loader.js'
//Funkcja przyjmuje dwa argumenty:
// 1. module => callback z templatka html
// 2. selector => wyzwalacz
export const renderFn = (module, selector) => {
  const place = document.querySelector(selector);
  place.addEventListener('click', module);
};
// renderFn(timerComponent, '.btn')
