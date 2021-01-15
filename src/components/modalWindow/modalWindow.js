import modalWindowContent from './modalWindowContent.js';

function modalWindow () {

    const modalWindow = document.createElement("div");
    modalWindow.className = "modal-window";

    modalWindow.appendChild(modalWindowContent(110, 110, 8 , 10));

    return modalWindow;
}

const window = document.body.appendChild(modalWindow());
// export default modalWinodow;
