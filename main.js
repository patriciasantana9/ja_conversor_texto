var texto = document.querySelector('.texto'); 
var modificado = document.querySelector('.modificado') 
var modifica = document.createElement('div'); 

let resultado = ''; 

function mai() {
    var textoMod = '';
    var textoMod = texto.value.toUpperCase(); 
    resultado = textoMod; 
    modifica.textContent = textoMod; 
}
document.querySelector('.maius').addEventListener('click', mai);

function min() {
    var textoMod = '';
    var textoMod = texto.value.toLowerCase();
    resultado = textoMod; 
    modifica.textContent = textoMod; 
}
document.querySelector('.minus').addEventListener('click', min);

function cap() {
    var valor = texto.value;
    var textoMod = '';
    textoMod = valor[0].toUpperCase() + valor.slice(1);
    resultado = textoMod; 

    modifica.textContent = resultado; 
}
document.querySelector('.capitalizacao').addEventListener('click', cap);

//primeira letra de cada palavra maiúscula
function plc() {
    var textoMod = '';
    let valor = texto.value;
    textoMod = valor.split(" "); 
    for  (let i = 0; i < textoMod.length; i++){
        textoMod[i] = textoMod[i][0].toUpperCase() + textoMod[i]; 
    }
    
    resultado = textoMod.join(" "); 

    modifica.textContent = resultado; 
}
document.querySelector('.plcp').addEventListener('click', plc);
//função pra copiar texto modificado

modificado.appendChild(modifica);            

function copiar() {
    alert('Texto copiado com sucesso!');
    navigator.clipboard.writeText(resultado); 
}
document.querySelector('.copiar').addEventListener('click', copiar);