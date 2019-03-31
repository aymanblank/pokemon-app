import types from './types';

export const getPokemonsAction = (first) => ({
  type: types.GET_POKEMONS_REQUESTED,
  payload: first
});

export const savePokemonsAction = (pokemons) => ({
  type: types.GET_POKEMONS_SUCCEEDED,
  payload: pokemons
});

export const failGettingPokemonsAction = (error) => ({
  type: types.GET_POKEMONS_FAILED,
  payload: error
});

export const getPokemonAction = (pokemonId) => ({
  type: types.GET_POKEMON_REQUESTED,
  payload: pokemonId
});

export const savePokemonAction = (pokemon) => ({
  type: types.GET_POKEMON_SUCCEEDED,
  payload: pokemon
});

export const failGettingPokemonAction = (error) => ({
  type: types.GET_POKEMON_FAILED,
  payload: error
});