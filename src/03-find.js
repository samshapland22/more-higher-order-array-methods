const examplePokemonData = require("../data/pokemon_data.js");
const ghostPokemonData = require("../data/ghostPokemon_data");

/**
 *
 *
 *
 * * findBySpecies
 *
 * Finds and returns a pokemon object based on the inputted species. Should make use of .find
 * Should be case insensitive. If no match is found, should return undefined.
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} species - A string that represents a pokemon species.
 * @returns {Object} A pokemon object that matches the inputted species.
 *
 * EXAMPLE:
 * findBySpecies(examplePokemonData, 'shadow pokemon'); <-- notice how the input is all lowercase.
 * > {
    name: "Gengar",
    species: "Shadow Pokemon",                          <-- notice how the species is capitalized.
    type: "ghost, poison",                                    needs to be case-insensitive
    weaknesses: "ghost, dark",
    strongAgainst: "ghost, psychic",
    moves: [
      {
        name: "night shade",
        type: "ghost",
      },
      {
        name: "curse",
        type: "ghost",
      },
      {
        name: "sucker punch",
        type: "dark",
      },
    ],
  }
 *
 * EXAMPLE:
 * findBySpecies(examplePokemonData, 'cat pokemon')
 * > Sorry, could not find the pokemon you're looking for.
 * 
 */
function findBySpecies(pokemonArr, species) {
  return pokemonArr.find((pokemon) => pokemon.species.toLowerCase().includes(species.toLowerCase()))
}

/**
 *
 *
 *
 * * findByNumOfMoves
 * 
 * * Read the directions carefully. What are they asking you to return in the event that there is no match?
 *
 * Finds and returns a pokemon object with a number of moves that matches the inputted number. Should make use of .find
 * If no pokemon is found, should return 'Sorry, could not find a pokemon that has <inputted num> move(s).'
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {number} num - A number that represents how many moves a pokemon has.
 * @returns {Object} A pokemon object that matches the inputted number of moves.
 *
 * EXAMPLE:
 * findByNumOfMoves(examplePokemonData, 1);
 * > {
    name: "Abra",
    species: "Psi Pokemon",
    type: "psychic",
    weaknesses: "bug, ghost, dark",
    strongAgainst: "fighting, poison",
    moves: [                               
      {
        name: "teleport",
        type: "psychic",
      },
    ],
  }
 *
 * EXAMPLE:
 * findByNumOfMoves(examplePokemonData, 12)
 * > Sorry, could not find a pokemon that has 12 move(s).
 * 
 */
function findByNumOfMoves(pokemonArr, num) {
  const found = pokemonArr.find((pokemon) => {
    return pokemon.moves.length === num;
  })

  return found ? found : `Sorry, could not find a pokemon that has ${num} move(s).`
}

/**
 *
 * 
 *
 * * findByMove
 * 
 * * This is a tricky one. You will have to use .find twice to solve it.
 * * Read the directions carefully. What are they asking you to return in the event that there is no match?
 *
 * Finds and returns a pokemon object based on the inputted move. Should make use of .find
 * If no pokemon with a matching move is found, should return null.
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} move - A string that represents a pokemon move.
 * @returns {Object} A pokemon object that matches the inputted species.
 *
 * EXAMPLE:
 * findByMove(examplePokemonData, 'poison powder');
 * > {
    name: "Bulbasaur",
    species: "Seed Pokemon",
    type: "grass, poison",
    weaknesses: "flying, poison, bug, fire, ice, psychic",
    strongAgainst: "ground, rock, water",
    moves: [
      {
        name: "razor leaf",
        type: "grass",
      },
      {
        name: "sleep powder",
        type: "grass",
      },
      {
        name: "poison powder",
        type: "poison",
      },
    ],
  }
 *
 * EXAMPLE:
 * findByMove(examplePokemonData, 'bite')
 * > Sorry, could not find pokemon with move "bite".
 * 
 */
function findByMove(pokemonArr, move) {
  const foundPokemon = pokemonArr.find((pokemon) => {
    return pokemon.moves.find((moveA) => moveA.name === move)
  })
  return foundPokemon || null;
}

module.exports = {
  findBySpecies,
  findByNumOfMoves,
  findByMove,
};
