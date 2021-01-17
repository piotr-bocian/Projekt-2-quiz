function img(src) {

    const divImg = document.createElement("div");
    divImg.className = "img-container";

    const img = document.createElement("img");
    img.setAttribute('src', src);
    
    divImg.appendChild(img);

    return divImg;
}

export { img }