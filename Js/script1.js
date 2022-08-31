"use strict";

const imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = "../images/imagen1.png";

imgArray[1] = new Image();
imgArray[1].src = "../images/imagen2.png";

imgArray[2] = new Image();
imgArray[2].src = '../images/imagen3.png';

imgArray[3] = new Image();
imgArray[3].src = '../images/imagen4.png';

imgArray[4] = new Image();
imgArray[4].src = '../images/imagen5.png';

imgArray[5] = new Image();
imgArray[5].src = "../images/imagen6.png";

imgArray[6] = new Image();
imgArray[6].src = "../images/imagen7.png";

imgArray[7] = new Image();
imgArray[7].src = '../images/imagen8.png';

imgArray[8] = new Image();
imgArray[8].src = '../images/imagen9.png';

imgArray[9] = new Image();
imgArray[9].src = '../images/imagen10.png';

imgArray[10] = new Image();
imgArray[10].src = '../images/imagen11.png';


const btnSiguiente = document.querySelector("#btnsiguiente");
btnSiguiente.style.backgroundColor = "antiquewhite";
btnSiguiente.style.padding = "10px";
btnSiguiente.style.borderRadius = "20px 10px 20px 10px";
btnSiguiente.style.border = "1px solid #393939";
btnSiguiente.style.fontSize = "20px";
btnSiguiente.style.margin = "50px";
btnSiguiente.style.textAlign = "center";

function siguienteImagen(){
    let img = document.getElementById("mainImagen");
    for(let i = 0; i < imgArray.length;i++){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImagen").src = imgArray[0].src;
                break;
            }
            document.getElementById("mainImagen").src = imgArray[i+1].src;
            break;
        }
    }
}

const btnAnterior = document.querySelector("#btnanterior");
btnAnterior.style.backgroundColor = "antiquewhite";
btnAnterior.style.padding = "10px";
btnAnterior.style.borderRadius = "20px 10px 20px 10px";
btnAnterior.style.border = "1px solid #393939";
btnAnterior.style.fontSize = "20px";
btnAnterior.style.margin = "50px";
btnAnterior.style.textAlign = "center";

function imagenAnterior(){
    let img = document.getElementById("mainImagen");
    for(let i = imgArray.length-1; i >=0 ;i--){
        if(imgArray[i].src == img.src){
            if(i === imgArray.length){
                document.getElementById("mainImagen").src = imgArray[11].src;
                break;
            }
            document.getElementById("mainImagen").src = imgArray[i-1].src;
            break;
        }
     }
}
