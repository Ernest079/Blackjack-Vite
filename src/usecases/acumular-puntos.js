import {valorCarta} from './valor-carta';

export const acumularPuntos = (carta, puntosJugador, puntos) => {
  puntosJugador = puntosJugador + valorCarta(carta);
  puntos.innerText = puntosJugador;
  return puntosJugador;
}