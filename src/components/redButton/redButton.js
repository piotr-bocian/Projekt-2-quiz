function redButton (text) {

    const redButtonContainer = document.createElement("div");
    redButtonContainer.className = "red-button";

    const redButtonText = document.createElement("p")
    redButtonText.innerHTML = text;

    redButtonContainer.appendChild(redButtonText);

    return redButtonContainer
}

export default redButton;