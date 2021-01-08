function logo() {

    const aLogo = document.createElement("div");
    aLogo.className = "logo";

    const imgLogo = document.createElement("img");
    const src = "../../../static/assets/ui/StarWarsLogo.png";
    imgLogo.setAttribute('src', src);
    
    aLogo.appendChild(imgLogo);

    return aLogo;
}

export default logo;