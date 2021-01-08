function redButton (text) {

    const redButtonContainer = document.createElement("div");
    redButtonContainer.className = "red-button";

    redButtonContainer.innerHTML = text;

    return redButtonContainer
}

export default redButton;