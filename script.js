
let puntosUsuario = 0;
let puntosPC = 0;

let instrucciones = document.querySelector('#instrucciones');
let contenedorPuntosUsuario = document.querySelector('#puntos-usuario');
let contenedorPuntosPC = document.querySelector('#puntos-computadora');
let mensaje = document.querySelector('#mensaje');
let contenedorGanaPunto = document.querySelector('#gana-punto');
let eligeTuArma = document.querySelector('#elige-tu-arma');

let contenedorEleccionUsuario = document.querySelector('#eleccion-usuario');
let contenedorEleccionPC = document.querySelector('#eleccion-computadora');

let botonesArmas = document.querySelectorAll('.arma');
botonesArmas.forEach(boton => {
    boton.addEventListener('click', iniciarTurno);
});

function iniciarTurno(e) {
    let eleccionPC = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if(eleccionPC === 0){
        eleccionPC = "piedra";
    } else if(eleccionPC === 1){
        eleccionPC = "papel";
    } else if(eleccionPC === 2){
        eleccionPC = "tijera";
    }

    if(
    (eleccionUsuario === "piedra" && eleccionPC === "tijera") ||
    (eleccionUsuario === "tijera" && eleccionPC === "papel") ||
    (eleccionUsuario === "papel" && eleccionPC === "piedra")
    ){
        ganaUsuario();
    } else if(
    (eleccionPC === "piedra" && eleccionUsuario === "tijera") ||
    (eleccionPC === "tijera" && eleccionUsuario === "papel") ||
    (eleccionPC === "papel" && eleccionUsuario === "piedra")
    ){
        ganaPC();
    } else {
        empate();
    }

    mensaje.classList.remove('disabled');
    contenedorEleccionUsuario.innerHTML = eleccionUsuario;
    contenedorEleccionPC.innerHTML = eleccionPC;

    if(puntosUsuario === 5 || puntosPC === 5){
        if(puntosUsuario === 5){
            instrucciones.innerHTML = "🔥 ¡Ganaste el juego! 🔥";
        }
        if(puntosPC === 5){
            instrucciones.innerHTML = "😭 ¡La computadora gano el juego! 😭";
        }

        eligeTuArma.classList.add('disabled');
        reiniciar.classList.remove('disabled');
        reiniciar.addEventListener('click', reiniciarJuego);
    }
}

function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerHTML = puntosUsuario;
    contenedorGanaPunto.innerHTML = "¡Ganaste un punto! 🔥";
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerHTML = puntosPC;
    contenedorGanaPunto.innerHTML = "¡La computadora gano un punto! 😭";
}

function empate(){
    contenedorGanaPunto.innerHTML = "¡Empate 😱!";
}