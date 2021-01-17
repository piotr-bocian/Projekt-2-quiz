
export const getRightSelector = () => {
    const rulesSelector = document.querySelector('.rules');
    const HoFameSelector = document.querySelector('.fame-container');

    if(rulesSelector) {
        return rulesSelector;
    }
    return HoFameSelector;
}