function modalWindow () {

    const modalWindow = document.createElement("div");
    modalWindow.className = "modal-window";

    return modalWindow;
}

const window = document.body.appendChild(modalWindow());
export default modalWinodow;
