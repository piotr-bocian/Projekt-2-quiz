import modalWindowContent from './modalWindowContent.js';

let playerHuman1 = playerHuman;
let playerCPU1 = playerCPU;

export function modalWindow (playerCPU, playerHuman) {   

    const modalWindow = document.createElement("div");
    modalWindow.className = "modal-window";

    modalWindow.appendChild(modalWindowContent(playerCPU, playerHuman));

    return modalWindow;
}

// const window = document.body.appendChild(modalWindow(playerCPU1, playerHuman1));
// export default modalWinodow;
