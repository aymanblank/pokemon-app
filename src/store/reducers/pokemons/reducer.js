import types from '../../actions/types';

export const initialState = {
  pending: false,
  error: null,
  selectedPokemon: null,
  data: [],
};

const pokemons = (state = initialState, action) => {
  switch(action.type){
    case types.GET_POKEMONS_REQUESTED: 
      return {
        ...state,
        pending: true,
      };
    case types.GET_POKEMONS_SUCCEEDED: 
      return {
        ...state,
        data: action.payload,
        pending: false,
      };
    case types.GET_POKEMONS_FAILED: 
      return {
        ...state,
        data: [],
        pending: false,
        error: action.payload,
      };
    case types.GET_POKEMON_REQUESTED: 
      return {
        ...state,
        pending: true,
      };
    case types.GET_POKEMON_SUCCEEDED: 
      return {
        ...state,
        selectedPokemon: action.payload,
        pending: false,
      };
    case types.GET_POKEMON_FAILED: 
      return {
        ...state,
        selectedPokemon: null,
        pending: false,
        error: action.payload,
      };
    default: return state;
  }
}

export default pokemons;