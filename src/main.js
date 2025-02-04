import './style.css';
import _ from 'underscore';
import {crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases';
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

let puntosJugadores = [];

const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo");

const puntos = document.querySelectorAll("small"),
  divCartasJugadores = document.querySelectorAll('.divCartas');

const inicializarJuego = (numJugadores = 2) => {
  console.clear();
  deck = crearDeck(tipos, especiales);
  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }
  btnPedir.disabled = false;
  btnDetener.disabled = false;

  puntos.forEach(elem => elem.innerText = 0);
  divCartasJugadores.forEach(elem => elem.innerHTML = "");
};

// Events
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  puntosJugadores[0] = acumularPuntos(carta, puntosJugadores[0], puntos[0]);

  crearCarta(carta, divCartasJugadores[0]);

  if (puntosJugadores[0] > 21) {
    console.warn("LOOOOOOSER");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosJugadores[puntosJugadores.length-1], deck, puntos[puntosJugadores.length-1], divCartasJugadores[puntosJugadores.length-1]);
  } else if (puntosJugadores[0] === 21) {
    console.warn("21, NICE");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosJugadores[puntosJugadores.length-1], deck, puntos[puntosJugadores.length-1], divCartasJugadores[puntosJugadores.length-1]);
  }
});

btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(puntosJugadores[0], puntosJugadores[puntosJugadores.length-1], deck, puntos[puntosJugadores.length-1], divCartasJugadores[puntosJugadores.length-1]);
});

btnNuevo.addEventListener("click", () => {

  inicializarJuego();

});
