"use strict";
const section = document.querySelector("#contenido");
const modelo = document.getElementsByClassName("modelo")[1];
const masVisitado = document.createElement("button");
masVisitado.innerText = "Mas Visitado";
masVisitado.style.backgroundColor = "dimgrey";
masVisitado.style.fontSize = "20px";
masVisitado.style.borderRadius = "10px";
masVisitado.style.margin = "50px";
masVisitado.style.textAlign = "center";
modelo.appendChild(masVisitado);


masVisitado.onclick = ()=>{
    open("https://www.bing.com/images/search?q=volkswagen+constellation+24280&qpvt=volkswagen+constellation+24280&tsc=ImageHoverTitle&form=IGRE&first=1")
    
}

const search = document.getElementsByClassName("interactable")[2];
search.onclick = ()=>{
    open("https://www.bing.com/?scope=web&cc=AR&FORM=ANSPH1&pc=U531");
}