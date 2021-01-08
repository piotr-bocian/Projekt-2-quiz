const questionToAnswer = (answers) => {
    console.log(answers)
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
  </style>
  <div part="loader">
      <div part='lightsaber'>
         <img part='lighstaberHandler' class = 'lighstaberHandler' src="../../../static/assets/ui/LightsaberHandle.png">
         <div part='lightsaberColor' class = 'lightsaberColor'>
            <span part='hider' class = 'hider'></span>
         </div>
      </div>
      <div part='counter'>
         <p part='countdown-text' class = 'countdown-text'></p>
         <p part= 'timer' class = 'timer'></p>
      </div>
  `;
}
class StarWarsTimer extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

    }
}
export default questionToAnswer;