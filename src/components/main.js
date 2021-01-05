
import {timerComponent} from './loader/loader.js'
//Funkcja przyjmuje dwa argumenty:
// 1. module => callback z templatka html
// 2. selector => wyzwalacz
const renderFn = (module, selector) => {
  const place = document.querySelector(selector);
  place.addEventListener('click', module);
};
renderFn(timerComponent, '.btn')













// const moduleActivator = document.querySelector('.btn');
// moduleActivator.addEventListener(
//   'click',
//   getModule('timerComponent', 'timerComponent.js'),
// );

// import 'regenerator-runtime/runtime';

// const lazyModuleLoader = async()=>{return await import(`./loader/loader.js`)};
// lazyModuleLoader.timerComponent();

// lazyModuleLoader('loader', 'loader.js');

// const moduleLoader = (listenerSelector) => {
//   const moduleActivator = document.querySelector(listenerSelector);
//  moduleActivator.addEventListener('click', (e)=>{
//    e.preventDefault();
//    lazyModuleLoader('loader', 'loader.js')
//    lazyModuleLoader.timerComponent()
//    module.timerComponent()
//  })
// }

// moduleLoader('.btn')



// const moduleLoader = (listenerSelector, folderName, fileName) => {
//   const moduleActivator = document.querySelector(listenerSelector);
//   moduleActivator.addEventListener('click', async (event) => {
//     event.preventDefault();
//     try {
//       const module = await import(`./${folderName}/${fileName}`);
//       module.timerComponent();
//     } catch (e) {
//       console.log(e);
//     }
//   });
// };

// moduleLoader('.btn', 'loader', 'loader.js');
// async function lazyTimerComponent(folderName, fileName) {
//   try {
//     const module = await import(`./${folderName}/${fileName}`);
//     module.timerComponent();
//   } catch (e) {
//     console.log(e);
//   }
// }
