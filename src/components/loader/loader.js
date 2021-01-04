//loader

const loader = () => {
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

      }

      .hider{
         display: block;
         width: 100%;
         height: 20px;
         background-color: red;
         border-radius: 20px;
         box-shadow: -2px 1px 10px 9px rgba(255, 13, 13, 0.96);
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

      .countdown-text, .timer {
         color: rgb(158, 42, 42);
         font-size: 50px;
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
  class StarWarsLoader extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('.lighstaberHandler').src =
        '../../../static/assets/ui/LightsaberHandle.png';
      this.shadowRoot.querySelector(
        '.countdown-text',
      ).innerText = `Time Left: `;
      this.shadowRoot.querySelector('.lightsaberColor');
      // this.shadowRoot.querySelector('.timer').innerText = `${sec}s`;
      this.shadowRoot.querySelector('.countdown-text').innerText = `Time Left:`;
    }

    timer() {
      let sec = 100;
      const count = this.shadowRoot.querySelector('.timer');
      const timer = setInterval(function () {
         count.innerText = `${sec}s`
        sec--;
        if (sec < 0) {
          clearInterval(timer);
        }
      }, 1000);
    }
    connectedCallback() {
      window.addEventListener('load', this.timer());
    }
  }

  window.customElements.define('star-wars-loader', StarWarsLoader);
};

export { loader };
