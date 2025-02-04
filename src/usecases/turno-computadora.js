
import {pedirCarta} from './pedir-carta';
import {acumularPuntos} from './acumular-puntos';
import {crearCarta} from './crear-carta';
import {ganador} from './ganador';

/**
 * Realiza el turno automatico del jgador computadora
 * @param {Number} puntosMinimos 
 * @param {Number} puntosComputadora 
 * @param {Array<string>} deck 
 * @param {Document} puntos 
 * @param {Document} divCartasJugadores 
 */
export const turnoComputadora = (puntosMinimos, puntosComputadora, deck, puntos, divCartasJugadores) => {

  if(!puntosMinimos) throw new Error('Puntos minimos son necesario');

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(carta, puntosComputadora, puntos);
    crearCarta(carta, divCartasJugadores);

  } while (puntosComputadora <= puntosMinimos && puntosMinimos <= 21);
  ganador(puntosMinimos, puntosComputadora);
};