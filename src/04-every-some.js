const examplePokemonData = require("../data/pokemon_data.js");
const ghostPokemonData = require("../data/ghostPokemon_data");

/**
 *
 *
 *
 * * checkForType
 *
 * Returns a boolean: true if at least one pokemon matches the inputted type, otherwise false. Should make use of .some
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {boolean} True if at least one pokemon in the array matches the inputted type, otherwise false.
 *
 * EXAMPLE:
 * checkForType(examplePokemonData, 'fighting');
 * > false
 *
 * EXAMPLE:
 * checkForType(examplePokemonData, 'ice');
 * > true
 *
 */
function checkForType(pokemonArr, type) {
  return pokemonArr.some((pokemon) => pokemon.type.includes(type));
}

/**
 *
 *
 *
 * * checkForTypeWeakness
 *
 * Returns a boolean: true if at least one pokemon is weak against the inputted type, otherwise false. Should make use of .some
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} [type = 'dragon'] - A string representing a pokemon type. Should default to 'dragon' if no argument is passed in.
 * @returns {boolean} True if at least one pokemon in the array is weak against the inputted type, otherwise false.
 *
 * EXAMPLE:
 * checkForTypeWeakness(examplePokemonData, 'normal');
 * > false
 *
 * EXAMPLE:
 * checkForTypeWeakness(examplePokemonData); <--nothing is passed in for the type parameter, so the function is using 'dragon' as the type input.
 * > true
 *
 * EXAMPLE:
 * checkForTypeWeakness(examplePokemonData, 'fighting');
 * > true
 *
 */
function checkForTypeWeakness(pokemonArr, type = 'dragon') {
  return pokemonArr.some((pokemon) => pokemon.weaknesses.includes(type));
}

/**
 *
 *
 *
 * * checkIfAllAreCertainType
 *
 * Returns a boolean: true if all pokemon match the inputted type, otherwise false. Should make use of .every
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {boolean} True if all pokemon in the array match the inputted type, otherwise false.
 *
 * EXAMPLE:
 * checkIfAllAreCertainType(examplePokemonData, 'ghost');
 * > false
 *
 * EXAMPLE:
 * checkIfAllAreCertainType(ghostPokemonData, 'ghost');
 * > true
 *
 */
function checkIfAllAreCertainType(pokemonArr, type) {
  return pokemonArr.every((pokemon) => pokemon.type.includes(type) );
}

/**
 *
 *
 *
 * * areAllStrongAgainstType
 *
 * Returns a boolean: true if all pokemon are strong against the inputted type, otherwise false. Should make use of .every
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {boolean} True if all pokemon in the array are strong against the inputted type, otherwise false.
 *
 * EXAMPLE:
 * areAllStrongAgainstType(examplePokemonData, 'ghost');
 * > false
 *
 * EXAMPLE:
 * areAllStrongAgainstType(ghostPokemonData, 'psychic');
 * > true
 *
 */
function areAllStrongAgainstType(pokemonArr, type) {
  return pokemonArr.every((pokemon) => pokemon.strongAgainst.includes(type) )
}

/**
 *
 *
 *
 * * checkForMove
 *
 * * This one is tricky. You will have to use .some twice.
 *
 * Returns a boolean: true if at least one pokemon has the inputted move in their `moves` array, otherwise false. Should make use of .some
 * If pokemon array is empty, should throw an error.
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} move - A string representing a pokemon move.
 * @returns {boolean} True if at least one pokemon in the array matches the inputted move, otherwise false.
 *
 * EXAMPLE:
 * checkForMove(examplePokemonData, 'surf');
 * > false
 *
 * EXAMPLE:
 * checkForMove(examplePokemonData, 'teleport');
 * > true
 *
 */
function checkForMove(pokemonArr, moveA) {
  return pokemonArr.some((pokemon) => pokemon.moves.some((move) => move.name.includes(moveA)) )
}

module.exports = {
  checkForType,
  checkForTypeWeakness,
  checkIfAllAreCertainType,
  areAllStrongAgainstType,
  checkForMove,
};
