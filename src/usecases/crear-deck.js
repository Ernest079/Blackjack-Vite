import _ from "underscore";

/**
 * Make a new deck
 * @param {Array<strign>} tiposDeCarta  Example: ["C", "D", "H", "S"]
 * @param {Array<strign>} tiposEspeciales Example: ["A", "J", "Q", "K"]
 * @returns {Array<strign>} returns a new deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if(!tiposDeCarta || tiposDeCarta.length === 0) 
    throw new Error('tiposDeCarta es Obligatorio como un arreglo');

  if(!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error('tiposEspeciales es Obligatorio como un arreglo');

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  return _.shuffle(deck);
};