"use strict";

const texto = document.createElement("h2");
texto.innerText = "Adquiera su unidad 0KM";
const bod = document.querySelector("body")
bod.appendChild(texto);

const parrafo = document.createElement("p");
parrafo.innerText = "Conozca nuestros servicios de financiacion. Para mayor informacion enviar el formulario de contactos.";
bod.appendChild(parrafo);    

const ir = document.createElement('button');
ir.innerText = "Ir a Contactos"
ir.classList.add("boton");
ir.style = "width:200px";
ir.style.borderRadius = "20px 10px 20px 10px";
ir.style.padding = "10px";
ir.style.fontSize = "20px";
ir.style.border = "1px solid #393939";
ir.style.backgroundColor = "antiquewhite";
ir.style.color = "black";
bod.appendChild(ir);

ir.onclick = ()=>{
    window.location.href = "index3.html";
}

ir.onmouseover = ()=>{
    ir.style.background = "dimgrey";
    ir.style.color = "white";
}

ir.onmouseout = ()=>{
    ir.style.background = "antiquewhite";
    ir.style.color = "black";
}