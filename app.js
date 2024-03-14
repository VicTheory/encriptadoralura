const textArea = document.querySelector(".text-wrapper-2");
const mensaje = document.querySelector(".mesage");
const actCopiar = document.querySelector(".button-wrapper2");

function actEncriptar(){
    const textoEncriptado = encriptar(textArea.value).trim();
    mensaje.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".mueco").style.display = "none";
    document.querySelector(".text-wrapper").style.visibility = "hidden";
    document.querySelector(".button-wrapper2").style.visibility = "visible";
    document.querySelector(".frame").classList = "frame::after";
    mensaje.classList ="mesage2";
    //console.log(mensaje.value);
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}
function actDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value).trim();
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

actCopiar.addEventListener("click", copyText);
function copyText(){
    const copy = document.querySelector('#toCopy');
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value);
    //document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copiado");
};
