import modalWindowContent from './modalWindowContent.js';

function modalWindow (content) {

    const modalWindow = document.createElement("div");
    modalWindow.className = "modal-window";

    modalWindow.appendChild(modalWindowContent(1, 5, 8 , 10));

    return modalWindow;
}

const window = document.body.appendChild(modalWindow());
export default modalWinodow;
