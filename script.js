
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
}