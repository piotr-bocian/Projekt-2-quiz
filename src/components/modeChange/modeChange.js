import gameRules from '../gameRules/gameRules.js';
import rulesText from '../gameRules/gameRulesText.js';
import gameQuestion from '../question/question.js';
import questionText from '../question/questionText.js';
import showHallOfFame from '../hallOfFame/hallOfFame.js';
import fameText from '../hallOfFame/hallOfFameText.js';
import { img } from '../imgContainer/img.js';
import imgSrc from '../imgContainer/imgSrc.js'

const modeChange = () => {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            .menu{
                background-color: transparent;
                grid-area: modes-list;
            }
            .modes-list{
                list-style-type: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 0;
            }
            
            .modes-list li{
                width: 28%;
                padding: 0;
                border-radius: 16px;
                text-align: center;
                font-family: Montserrat;
                font-weight: 600;
                font-size: 1.5rem;
                line-height: 51px;
                color: #FFFFFF;
                background-color: #050018;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 4px 40px rgba(255, 0, 0, 0.9);
            }
            
            .modes-list li.dark{
                box-shadow: 6px 6px 6px rgba(255, 0, 0, 0.25), 10px 10px 90px #FF0000;
            }
            
            .modes-list li:hover{
                cursor: pointer;
            }

            @media only screen and (max-width: 812px) and (orientation: landscape){
                
                .modes-list li{
                    font-size: 1.15em;
                    line-height: 1.5em;
                    padding: 5px;
                    box-sizing: border-box;
                }
            }
            @media only screen and (min-device-width: 320px) and (max-device-width: 480px){
                
                .modes-list{
                    margin: 5px;
                }
                .modes-list li{
                    font-size: 1em;
                    line-height: 1em;
                    padding: 5px;
                }
            }

        </style>
        <div class="menu">
            <ul class="modes-list">
                <li class="dark">People</li>
                <li>Vehicles</li>
                <li>Starships</li>
            </ul>
        </div>
    `;

    class modeChangeComponent extends HTMLElement {
        constructor(){
            super();

            this.currentMode = 'People';    //domyślnie wybrany jest tryb People

            this.attachShadow({ mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback(){
            const modes = this.shadowRoot.querySelectorAll('li');
            
            modes.forEach(mode => {
                mode.addEventListener('click', (e) => {
                    this.currentMode = e.target.innerText;
                  //  alert('Wybrano tryb: ' + this.currentMode);
                    modes.forEach(mode => mode.classList.remove('dark'));   //usuwamy klasę dark ze wszystkich elementów li
                    e.target.classList.add('dark');   //dodajemy klasę dark do klikniętego elementu li
                   
                    const gameRulesContainer = document.body.querySelector('.rules');
                    const questionContainer = document.body.querySelector('.title');
                    const imageContainer = document.body.querySelector('.img-container');
                    const hallOfFameContainer = document.body.querySelector('.fame-container');
                    

                    if(!(document.querySelector('.questions'))){
                        if(gameRulesContainer != null)
                            document.body.replaceChild(gameRules(rulesText[this.currentMode.toLowerCase()]), gameRulesContainer);
                        if(hallOfFameContainer != null)
                            document.body.replaceChild(showHallOfFame(fameText[this.currentMode.toLowerCase()]), hallOfFameContainer);
                        document.body.replaceChild(gameQuestion(questionText[this.currentMode.toLowerCase()]), questionContainer);
                        document.body.replaceChild(img(imgSrc[this.currentMode.toLowerCase()]), imageContainer);
                        }

                    // switch (this.currentMode){
                    //     case 'People':
                    //       //console.log(gameRules(rulesText.people));
                    //       gameQuestion(questionText.people);
                    //       if(gameRulesContainer != null && !(document.querySelector('.questions')))
                    //         document.body.replaceChild(gameRules(rulesText.people), gameRulesContainer);
                    //       if(!(document.querySelector('.questions')))
                    //         document.body.replaceChild(gameQuestion(questionText.people), questionContainer);
                    //       if(hallOfFameContainer != null && !(document.querySelector('.questions')))
                    //         document.body.replaceChild(showHallOfFame(fameText.people), hallOfFameContainer);
                    //       if(!(document.querySelector('.questions')))
                    //         document.body.replaceChild(img(imgSrc.people), imageContainer);
                    //       break;
                    //     case 'Vehicles':
                    //       gameRules(rulesText.vehicles);
                    //       gameQuestion(questionText.vehivles);
                    //       if(gameRulesContainer != null && !(document.querySelector('.questions')))
                    //         document.body.replaceChild(gameRules(rulesText.vehicles), gameRulesContainer);
                    //       if(!(document.querySelector('.questions')))
                    //         document.body.replaceChild(gameQuestion(questionText.vehicles), questionContainer);
                    //       if(hallOfFameContainer != null && !(document.querySelector('.questions')))
                    //         document.body.replaceChild(showHallOfFame(fameText.vehicles), hallOfFameContainer);
                    //       if(!(document.querySelector('.questions')))
                    //         document.body.replaceChild(img(imgSrc.vehicles), imageContainer);
                    //       break;
                    //     case 'Starships':
                    //        gameRules(rulesText.starships);
                    //        gameQuestion(questionText.starships);
                    //        if(gameRulesContainer != null && !(document.querySelector('.questions')))
                    //         document.body.replaceChild(gameRules(rulesText.starships), gameRulesContainer);
                    //        if(!(document.querySelector('.questions')))
                    //         document.body.replaceChild(gameQuestion(questionText.starships), questionContainer);
                    //        if(hallOfFameContainer != null && !(document.querySelector('.questions')))
                    //         document.body.replaceChild(showHallOfFame(fameText.starships), hallOfFameContainer);
                    //        if(!(document.querySelector('.questions')))
                    //         document.body.replaceChild(img(imgSrc.starships), imageContainer);
                    //        break; 
                    // }

                })
            })
        }

        getCurrentMode(){
            return this.currentMode;
        }
    }

    window.customElements.define('mode-change', modeChangeComponent);
}

// modeChange();

export default modeChange;