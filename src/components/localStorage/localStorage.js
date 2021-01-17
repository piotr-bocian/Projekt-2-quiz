function getDefaultRanking(){
    return {
        people: [{nick: 'Ania', correctAnswers: 19, answers: 20}, {nick: 'Mateusz', correctAnswers: 14, answers: 30}, {nick: 'Leia Organa', correctAnswers: 1, answers: 23}],
        vehicles: [{nick: 'Adam', correctAnswers: 16, answers: 19}, {nick: 'Ania', correctAnswers: 15, answers: 20}, {nick: 'Krystian', correctAnswers: 5, answers: 20}],
        starships: [{nick: 'Ania', correctAnswers: 17, answers: 17}, {nick: 'Jakub', correctAnswers: 14, answers: 20}, {nick: 'Mateusz', correctAnswers: 11, answers: 20}]
    }
}

function modifyStorage(mode, pNick, pCorrectAnswers, pAnswers){
    
    let rankingValues = JSON.parse(localStorage.getItem('ranking')) || getDefaultRanking();

    rankingValues[mode.toLowerCase()].push({nick: pNick, correctAnswers: pCorrectAnswers, answers: pAnswers});
    console.log(rankingValues[mode.toLowerCase()])
    rankingValues[mode.toLowerCase()].sort((a, b) => {
        if(a.correctAnswers<b.correctAnswers) return 1;
        if(a.correctAnswers>b.correctAnswers) return -1;

        if(a.correctAnswers==b.correctAnswers){
            if(a.answers<b.answers) return -1;
            if(a.answers>b.answers) return 1;
        }

        return 0;
    });
    
    rankingValues[mode.toLowerCase()].splice(3, 1);

    localStorage.setItem('ranking', JSON.stringify(rankingValues)); 
}


// modifyStorage('people', 'Jan', 100, 100)

export default getDefaultRanking; 
export {modifyStorage};

