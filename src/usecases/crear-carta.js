export const crearCarta = (carta, divCartasJugadores) => {
  const imgCarta = document.createElement("img");
  imgCarta.src = `assets/cartas/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores.append(imgCarta)
}