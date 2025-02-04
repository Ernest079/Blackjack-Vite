

/**
 * This function allow take a card
 * @param {Array<string>} deck Es una rreglo de strings
 * @returns {String} Retorna la ultima carta del arreglo
 */
export const pedirCarta = (deck) => {
  
  if (!deck ||deck.length === 0) {
    throw "NO hay mas cartas";
  }
  let carta = deck.pop();
  return carta;
};