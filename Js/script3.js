"use strict";

const texto = document.createElement("h3");
texto.innerText = "Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *";
const bod = document.querySelector("body")
bod.appendChild(texto);

const input = document.createElement('input');
input.setAttribute("type", "text");
input.setAttribute("value", "");
input.setAttribute("placeholder", "Nombre *");
input.classList.add("nombre");
input.style = "width:400px";
input.style.borderRadius = "5px 5px 5px 5px";
input.style.padding = "10px";
input.style.fontSize = "12px";
input.style.border = "1px solid #393939";
const body = document.querySelector("body");
body.appendChild(input);

const input1 = document.createElement('input');
input1.setAttribute("type", "text");
input1.setAttribute("value", "");
input1.setAttribute("placeholder", "Telefono *");
input1.classList.add("telefono");
input1.style = "width:400px";
input1.style.borderRadius = "5px 5px 5px 5px";
input1.style.padding = "10px";
input1.style.fontSize = "12px";
input1.style.border = "1px solid #393939";
const body1 = document.querySelector("body");
body1.appendChild(input1);

const input2 = document.createElement('input');
input2.setAttribute("type", "text");
input2.setAttribute("value", "");
input2.setAttribute("placeholder", "Pcia *");
input2.classList.add("pcia");
input2.style = "width:400px";
input2.style.borderRadius = "5px 5px 5px 5px";
input2.style.padding = "10px";
input2.style.fontSize = "12px";
input2.style.border = "1px solid #393939";
const body2 = document.querySelector("body");
body2.appendChild(input2);

const input3 = document.createElement('input');
input3.setAttribute("type", "text");
input3.setAttribute("value", "");
input3.setAttribute("placeholder", "Email *");
input3.classList.add("email")
input3.style = "width:400px";
input3.style.borderRadius = "5px 5px 5px 5px";
input3.style.padding = "10px";
input3.style.fontSize = "12px";
input3.style.border = "1px solid #393939";
const body3 = document.querySelector("body");
body3.appendChild(input3);

const input4 = document.createElement('input');
input4.setAttribute("type", "text");
input4.setAttribute("value", "");
input4.setAttribute("placeholder", "Escriba su consulta *");
input4.classList.add("consulta");
input4.style = "height:80px";
input4.style.borderRadius = "5px 5px 5px 5px";
input4.style.padding = "10px";
input4.style.fontSize = "12px";
input4.style.border = "1px solid #393939";
const body4 = document.querySelector("body");
body4.appendChild(input4);

const btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar Mensaje";
btnEnviar.classList.add("boton");
const body5 = document.querySelector("body");
body5.appendChild(btnEnviar);


btnEnviar.onclick = ()=>{
    const nombre = document.querySelector(".nombre").value;
    const telefono = document.querySelector(".telefono").value;
    const pcia = document.querySelector(".pcia").value;
    const email = document.querySelector(".email").value;
    const consulta = document.querySelector(".consulta").value;
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("telefono", telefono);
    sessionStorage.setItem("pcia", pcia);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("consulta", consulta);
    const nombreIng = sessionStorage.getItem('nombre');
    const telefonoIng = sessionStorage.getItem('telefono');
    const pciaIng = sessionStorage.getItem('pcia');
    const emailIng = sessionStorage.getItem('email');
    const consultaIng = sessionStorage.getItem('consulta');
console.log(nombreIng, telefonoIng, pciaIng, emailIng, consultaIng);
alert("Los Datos han sido enviados correctamente" + "," + nombreIng);
}

const btnSalir = document.createElement("button");
btnSalir.innerText = "Salir";
btnSalir.classList.add("boton");
const body6 = document.querySelector("body");
body6.appendChild(btnSalir);

btnSalir.onclick = ()=>{
    sessionStorage.clear()
    location.reload()
}

