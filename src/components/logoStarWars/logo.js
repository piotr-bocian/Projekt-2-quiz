function logo() {

    const divLogo = document.createElement("div");
    divLogo.className = "logo";
  
    const imgLogo = document.createElement("img");
    // const src = "../../../static/assets/ui/StarWarsLogo.png";
    const src = "../../../../Projekt-2-quiz/static/assets/ui/StarWarsLogo.png";
    imgLogo.setAttribute('src', src);
    
    // reload:
    function reload() {
        reload = location.reload();
    }
    
    imgLogo.addEventListener("click", reload);
    
    divLogo.appendChild(imgLogo)

    return divLogo;
}

export default logo;