import {valorCarta} from './valor-carta';

/**
 * Realiza la operacion del puntaje y lo acumula y almacena
 * @param {String} carta 
 * @param {Number} puntosJugador 
 * @param {Document} puntos 
 * @returns {Numbre} Regresa los puntos acumulados del jugador
 */
export const acumularPuntos = (carta, puntosJugador, puntos) => {
  puntosJugador = puntosJugador + valorCarta(carta);
  puntos.innerText = puntosJugador;
  return puntosJugador;
}