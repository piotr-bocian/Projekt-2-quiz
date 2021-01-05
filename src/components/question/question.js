const loadQuestion = () => {
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            .menu{
                margin-top: 1rem;
                background-color: white;
                padding: 2.5rem 1rem;
                box-shadow: 2px 2px 15px darkred;
                border-radius: 20px;
            }
            
            .modes-list{
                list-style-type: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            
            .modes-list li{
                font-size: 1.5rem;
                color: darkgrey;
            }
            
            .modes-list li.dark{
                color: black;
            }
            
            .modes-list li:hover{
                cursor: pointer;
                color: black;
            }
            .title{
                margin-top: 2.5rem;
                background-color: white;
                padding: 1.5rem 1rem;
                box-shadow: 2px 2px 15px darkred;
                text-align: center;
                font-size: 2rem;
                font-weight: bold;
                border-radius: 20px;
            }
        </style>
        <div class="menu">
            <ul class="modes-list">
                <li class="dark">People</li>
                <li>Vehicles</li>
                <li>Starships</li>
            </ul>
        </div>

        <div class="title">
            <p>Who is this character?</p>
        </div>
    `;
    
    // class question extends HTMLElement {};
    const question = document.querySelector('.title p');
    const modes = document.querySelectorAll('.modes-list li');

    modes[0].addEventListener('click', function(){
        question.innerHTML = 'Who is this character?'
    })
    modes[1].addEventListener('click', function(){
        question.innerHTML = 'Do you recognize this vehicle?'
    })
    modes[2].addEventListener('click', function(){
        question.innerHTML = 'Do you recognize this starship?'
    })
}

loadQuestion();