/**
 * Crea la imagen dentro del documento
 * @param {String} carta 
 * @param {Document} divCartasJugadores 
 */
export const crearCarta = (carta, divCartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores.append(imgCarta)
}