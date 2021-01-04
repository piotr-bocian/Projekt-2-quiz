const loadHallOfFame = () => {
    const template = document.createElement('template');
    template.innerHTML = `
    <div class="ranking">
            <h2>Mode Ranking</h2>
            <div>
                <ul>
                    <li class="bold">Place</li>
                    <li>1st</li>
                    <li>2nd</li>
                    <li>3rd</li>
                </ul>
                <ul class="ranking-people">
                    <li class="bold">Player</li>
                    <li>Ania</li>
                    <li>Mateusz</li>
                    <li>Leia Organa</li>
                </ul>
                <ul class="ranking-score">
                    <li class="bold">Answered</li>
                    <li>15/20</li>
                    <li>14/30</li>
                    <li>1/23</li>
                </ul>
            </div>
        </div>`
}