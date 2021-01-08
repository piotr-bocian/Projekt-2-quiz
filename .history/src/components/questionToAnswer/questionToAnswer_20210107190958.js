const questionToAnswer = (answers) => {
    console.log(answers)
    return document.getElementById('swquiz-app').innerHTML = `
  <style>

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

export default questionToAnswer;