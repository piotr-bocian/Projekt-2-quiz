function logo() {

    const divLogo = document.createElement("div");
    divLogo.className = "logo";

    const reloadLogo = document.createElement("a");
    reloadLogo.className = "logoreloadLogo";
    reloadLogo.setAttribute('href', '../../../index.html' )
    
    const imgLogo = document.createElement("img");
    const src = "../../../static/assets/ui/StarWarsLogo.png";
    imgLogo.setAttribute('src', src);
    
    divLogo.appendChild(reloadLogo);
    reloadLogo.appendChild(imgLogo)

    return divLogo;
}

export default logo;