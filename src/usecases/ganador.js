/**
 * Compara los puntos y muestra un mensaje sobre el ganador
 * @param {Number} puntosMinimos 
 * @param {Number} puntosComputadora 
 */
export const ganador = (puntosMinimos, puntosComputadora) => {
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("La Computadora Gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("La Computadora Gana");
    }
  }, 100);
}