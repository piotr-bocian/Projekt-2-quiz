const timerComponent = () => {
  const template = document.createElement('template');
  template.innerHTML = `
  <style>
  .lightsaber,
  .counter {
     display: flex;
     flex-wrap: no-wrap;
     justify-content: center;
     align-items: center;
  }

  .lighstaberHandler {
     flex-shrink: 0;
  }

  .lightsaberColor {
     width: 100%;
     height: 20px;
     border-radius: 20px;
     background-color: #bcbcbc;
  }

  .hider {
     display: block;
     width: 100%;
     height: 20px;
     background-color: white;
     border-radius: 20px;
     box-shadow: 0px 0px 10px 10px #fa250e;
     animation: slider 100s linear;
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

  .countdown-text,
  .timer {
     color: #d81e06;
     font-size: 24px;
  }
   </style>
  <div class="loader">
      <div class='lightsaber'>

         <img class='lighstaberHandler' src="../../../static/assets/ui/LightsaberHandle.png">

         <div class='lightsaberColor'>
            <span class='hider'></span>
         </div>
      </div>
      <div class='counter'>
         <p class='countdown-text'></p>
         <p class= 'timer'></p>
      </div>
  `;
  class StarWarsTimer extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('.lighstaberHandler').src =
        '../../../static/assets/ui/LightsaberHandle.png';
      this.shadowRoot.querySelector('.lightsaberColor');
      this.shadowRoot.querySelector('.countdown-text').innerText = `Time Left`;
    }
    timer() {
      let sec = 120;
      const count = this.shadowRoot.querySelector('.timer');
      const countdown = setInterval(function () {
        count.innerText = `: ${sec}s`;
        sec--;
        //trzeba naprawić skaczący tekst oraz dodać minuty
        if (sec <= 0) {
          clearInterval(countdown);
          count.innerText = `: Twój czas się skończył`;
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
