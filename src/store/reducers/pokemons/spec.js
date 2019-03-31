import types from '../../actions/types';
import pokemonReducer, { initialState } from './reducer';

describe('Pokemon Reducer', () => {

  it('Should return default state', () => {
    const newState = pokemonReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  describe('Pokemon Reducer', () => {

    it(`Should return new state with pending "true" if received type is ${types.GET_POKEMONS_REQUESTED}`, () => {
      const expectedState = {
        ...initialState,
        pending: true
      };

      const newState = pokemonReducer(undefined, {
          type: types.GET_POKEMONS_REQUESTED,
          payload: undefined
      });
      expect(newState).toEqual(expectedState);
    });

    it(`Should return new state with data containg elements, if received type is ${types.GET_POKEMONS_SUCCEEDED}`, () => {
      const pokemons = [
        {
          id: 'test1',
          number: '001',
          name: 'Test1 Name',
          maxCP: 500,
          maxHP: 1000,
          image: 'image',
          types: ["Ground", "Air"],
        },
        {
          id: 'test1',
          number: '001',
          name: 'Test1 Name',
          maxCP: 500,
          maxHP: 1000,
          image: 'image',
          types: ["Ground", "Air"],
        },
      ];

      const expectedState = {
        ...initialState,
        data: pokemons
      };

      const newState = pokemonReducer(undefined, {
          type: types.GET_POKEMONS_SUCCEEDED,
          payload: pokemons
      });
      expect(newState).toEqual(expectedState);
    });

    it(`Should return new state with error not null if received type is ${types.GET_POKEMONS_FAILED}`, () => {
      const error = new Error('Error!');
      const expectedState = {
        ...initialState,
        error,
      };

      const newState = pokemonReducer(undefined, {
          type: types.GET_POKEMONS_FAILED,
          payload: error
      });
      expect(newState).toEqual(expectedState);
    });

    it(`Should return new state with pending "true" if received type is ${types.GET_POKEMON_REQUESTED}`, () => {
      const expectedState = {
        ...initialState,
        pending: true
      };

      const newState = pokemonReducer(undefined, {
          type: types.GET_POKEMON_REQUESTED,
          payload: 'testID'
      });
      expect(newState).toEqual(expectedState);
    });

    it(`Should return new state with selectedPokemon not null if received type is ${types.GET_POKEMON_SUCCEEDED}`, () => {
      const pokemon = {
        id: 'test1',
        number: '001',
        name: 'Test1 Name',
        maxCP: 500,
        maxHP: 1000,
        image: 'image',
        types: ["Ground", "Air"],
      };

      const expectedState = {
        ...initialState,
        selectedPokemon: pokemon
      };

      const newState = pokemonReducer(undefined, {
          type: types.GET_POKEMON_SUCCEEDED,
          payload: pokemon
      });
      expect(newState).toEqual(expectedState);
    });

    it(`Should return new state with error not null if received type is ${types.GET_POKEMON_FAILED}`, () => {
      const error = new Error('Error!');
      const expectedState = {
        ...initialState,
        error,
      };

      const newState = pokemonReducer(undefined, {
          type: types.GET_POKEMON_FAILED,
          payload: error
      });
      expect(newState).toEqual(expectedState);
    });

  });
});