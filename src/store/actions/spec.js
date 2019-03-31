import { getPokemonAction, getPokemonsAction, savePokemonsAction, failGettingPokemonsAction, savePokemonAction, failGettingPokemonAction } from './pokemonsActions';
import types from './types';

describe('Pokemon Actions', () => {

  describe('Get Pokemons Actions', () => {
    it('Should return expected action with sent params in it', () => {
      const payload = 20;
      const expectedAction = {
        type: types.GET_POKEMONS_REQUESTED,
        payload
      };
      const newAction = getPokemonsAction(payload);
      expect(newAction).toEqual(expectedAction);
    });

    it('Should return expected action with undefined payload', () => {
      const expectedAction = {
        type: types.GET_POKEMONS_REQUESTED,
        payload: undefined
      };
      const newAction = getPokemonsAction();
      expect(newAction).toEqual(expectedAction);
    });
  });

  describe('Save Pokemons Actions', () => {
    it('Should return expected action with sent params in it', () => {
      const payload = [];
      const expectedAction = {
        type: types.GET_POKEMONS_SUCCEEDED,
        payload
      };
      const newAction = savePokemonsAction(payload);
      expect(newAction).toEqual(expectedAction);
    });

    it('Should return expected action with undefined payload', () => {
      const expectedAction = {
        type: types.GET_POKEMONS_SUCCEEDED,
        payload: undefined
      };
      const newAction = savePokemonsAction();
      expect(newAction).toEqual(expectedAction);
    });
  });

  describe('Fail Getting Pokemons Actions', () => {
    it('Should return expected action with sent params in it', () => {
      const payload = new Error('Error!');
      const expectedAction = {
        type: types.GET_POKEMONS_FAILED,
        payload
      };
      const newAction = failGettingPokemonsAction(payload);
      expect(newAction).toEqual(expectedAction);
    });

    it('Should return expected action with undefined payload', () => {
      const expectedAction = {
        type: types.GET_POKEMONS_FAILED,
        payload: undefined
      };
      const newAction = failGettingPokemonsAction();
      expect(newAction).toEqual(expectedAction);
    });
  });

  describe('Get Pokemon Actions', () => {
    it('Should return expected action with sent params in it', () => {
      const payload = "TestId";
      const expectedAction = {
        type: types.GET_POKEMON_REQUESTED,
        payload
      };
      const newAction = getPokemonAction(payload);
      expect(newAction).toEqual(expectedAction);
    });

    it('Should return expected action with undefined payload', () => {
      const expectedAction = {
        type: types.GET_POKEMON_REQUESTED,
        payload: undefined
      };
      const newAction = getPokemonAction();
      expect(newAction).toEqual(expectedAction);
    });
  });

  describe('Save Pokemon Actions', () => {
    it('Should return expected action with sent params in it', () => {
      const payload = {};
      const expectedAction = {
        type: types.GET_POKEMON_SUCCEEDED,
        payload
      };
      const newAction = savePokemonAction(payload);
      expect(newAction).toEqual(expectedAction);
    });

    it('Should return expected action with undefined payload', () => {
      const expectedAction = {
        type: types.GET_POKEMON_SUCCEEDED,
        payload: undefined
      };
      const newAction = savePokemonAction();
      expect(newAction).toEqual(expectedAction);
    });
  });

  describe('Fail Getting Pokemon Actions', () => {
    it('Should return expected action with sent params in it', () => {
      const payload = new Error('Error!');
      const expectedAction = {
        type: types.GET_POKEMON_FAILED,
        payload
      };
      const newAction = failGettingPokemonAction(payload);
      expect(newAction).toEqual(expectedAction);
    });

    it('Should return expected action with undefined payload', () => {
      const expectedAction = {
        type: types.GET_POKEMON_FAILED,
        payload: undefined
      };
      const newAction = failGettingPokemonAction();
      expect(newAction).toEqual(expectedAction);
    });
  });

});