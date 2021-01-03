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

      .countdown-text {
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
      ).innerText = `Time Left: 1m 20s`;
      this.shadowRoot.querySelector('.lightsaberColor');
      //na tym działam

      this.shadowRoot.querySelector(
        '.countdown-text',
      ).innerText = `Time Left: ${min}m ${sec}s`;
    }
  }
  window.customElements.define('star-wars-loader', StarWarsLoader);
};

export { loader };
