import { cpu } from '../playerCPU/playerCPU.js';
import { playerHuman } from '../playerHuman/playerHuman.js';
import { modalWindow } from '../modalWindow/modalWindow.js';
const timerComponent = () => {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
  .hider {
   display: block;
   width: 100%;
   height: 20px;
   background-color: white;
   border-radius: 20px;
   box-shadow: 0px 0px 10px 10px #fa250e;
   animation: slider 60s linear;
   animation-play-state: running;
   animation-fill-mode: forwards;
}

@keyframes slider {
   0% {
      width: 100%
   }

   100% {
      width: 0;
   }
}
  </style>
  <div part="loader">
      <div part='lightsaber'>

         <img part='lighstaberHandler' class = 'lighstaberHandler' src="../../../../Projekt-2-quiz/static/assets/ui/LightsaberHandle.png">

         <div part='lightsaberColor' class = 'lightsaberColor'>
            <span part='hider' class = 'hider'></span>
         </div>
      </div>
      <div part='counter'>
         <p part='countdown-text' class = 'countdown-text'></p>
         <span part= 'timer' class = 'timer'>: 1m 00s</span>
      </div>
  `;
  class StarWarsTimer extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('.lighstaberHandler').src =
        '../../../../Projekt-2-quiz/static/assets/ui/LightsaberHandle.png';
      this.shadowRoot.querySelector('.lightsaberColor');
      this.shadowRoot.querySelector('.countdown-text').innerText = `Time Left `;
    }
    timer() {
      let time = 60;
      let sec = time;
      let min = 1;
      const count = this.shadowRoot.querySelector('.timer');
      const countdown = setInterval(function () {
        sec--;
        if (sec === time) {
          count.innerText = `: ${min}m 00s`;
        } else if (sec !== time) {
          min = 0;
          count.innerText = `: ${min}m ${sec}s`;
        }
        //trzeba naprawić skaczący tekst oraz dodać minuty
        if (sec < 0) {
          count.innerText = `: ${min}m 0s`;
          clearInterval(countdown);
          count.innerText = `: your time is up, young Padawan!`;
          const window = document.body.appendChild(modalWindow (cpu, playerHuman));

          //zaimportowane obiekty playerHuman i cpu - z nich wzięlismy
          // properties zwracające wszystkie poprawne odpowiedzi (dla człowieka
          //rightAnswer, dla cpu - correctAnswer) oraz wszystkie odpowiedzi (człowiek allAnswer, cpu - noOfAnswers)

          // alert(`Twój wynik to: ${playerHuman.rightAnswer}/${playerHuman.allAnswer}, a komputera: ${cpu.correctAnswers}/${cpu.noOfAnswers}`);
        }
      }, 1000);
    }
    connectedCallback() {
      window.addEventListener('load', this.timer());
    }
  }
  window.customElements.define('star-wars-loader', StarWarsTimer);
};

export { timerComponent };
