let numeroSecreto = generaNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    } else{
        document.getElementById('reiniciar').removeAttribute('disabled');
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'el numero secreto es menor');
        } else {
            asignarTextoElemento('p','el número secreto es mayor');
        }
intentos++;
limpiarCaja();
    }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
   
}

function generaNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    
asignarTextoElemento('h1',' el juego del numero secreto');
asignarTextoElemento('p', 'indica un numero del 1 al 10');
numeroSecreto = generaNumeroSecreto();
intentos = 1;
}
function reiniciarJuego(){
//limpiar caja
limpiarCaja();
// indicar mensaje de intervalo de numeros

//generar el numero aleatorio
// inicializar el numero de intentos
condicionesIniciales();
// deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();