import { runSaga } from 'redux-saga';
import { getPokemon, getPokemons } from '../pokemonsSaga';
import * as apollo from '../../../apollo/pokemonsGQL';
import { savePokemonsAction, failGettingPokemonsAction, savePokemonAction, failGettingPokemonAction } from '../../actions/pokemonsActions';

describe('Checking Pokemons Saga', () => {

  describe('Checking fetchPokemons', () => {

    it('should load and handle pokemons in case of success', async () => {
        // we push all dispatched actions to make assertions easier
        // and our tests less brittle
        const dispatchedActions = [];

        // we don't want to perform an actual apollo query call in our tests
        // so we will mock the fetchPokemons with jest
        // this will mutate the dependency which we may reset if other tests
        // are dependent on it
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
            id: 'test2',
            number: '002',
            name: 'Test2 Name',
            maxCP: 500,
            maxHP: 1000,
            image: 'image',
            types: ["Ground", "Air"],
          }
        ];

        const mockedPokemons = {
          pokemons,
        };

        apollo.fetchPokemons = jest.fn(() => Promise.resolve(mockedPokemons));

        const fakeStore = {
            getState: () => ({
              pending: false,
              error: null,
              selectedPokemon: null,
              data: []
            }),
            dispatch: action => dispatchedActions.push(action),
        };

        // wait for saga to complete
        await runSaga(fakeStore, getPokemons, {}).done;

        expect(apollo.fetchPokemons.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(savePokemonsAction(pokemons));
    });

    it('should load and handle pokemons in case of fail', async () => {
      // we push all dispatched actions to make assertions easier
      // and our tests less brittle
      const dispatchedActions = [];

      // we simulate an error by rejecting the promise
      // then we assert if our saga dispatched the action(s) correctly
      const error = 'Apollo server is down';
      apollo.fetchPokemons = jest.fn(() => Promise.reject(error));

      const fakeStore = {
          getState: () => ({
            pending: false,
            error: null,
            selectedPokemon: null,
            data: []
          }),
          dispatch: action => dispatchedActions.push(action),
      };

      // wait for saga to complete
      await runSaga(fakeStore, getPokemons, {}).done;

      expect(apollo.fetchPokemons.mock.calls.length).toBe(1);
      expect(dispatchedActions).toContainEqual(failGettingPokemonsAction(error));
    });

  });

  describe('Checking fetchPokemon', () => {

    it('should load and handle pokemon in case of success', async () => {
        // we push all dispatched actions to make assertions easier
        // and our tests less brittle
        const dispatchedActions = [];

        // we don't want to perform an actual apollo query call in our tests
        // so we will mock the fetchPokemon with jest
        // this will mutate the dependency which we may reset if other tests
        // are dependent on it
        const pokemon = { 
          id: 'test1',
          number: '001',
          name: 'Test1 Name',
          maxCP: 500,
          maxHP: 1000,
          image: 'image',
          types: ["Ground", "Air"],
        };

        const mockedPokemon = {
          pokemon,
        };

        apollo.fetchPokemon = jest.fn(() => Promise.resolve(mockedPokemon));

        const fakeStore = {
            getState: () => ({
              pending: false,
              error: null,
              selectedPokemon: null,
              data: []
            }),
            dispatch: action => dispatchedActions.push(action),
        };

        // wait for saga to complete
        await runSaga(fakeStore, getPokemon, 'test1').done;

        expect(apollo.fetchPokemon.mock.calls.length).toBe(1);
        expect(dispatchedActions).toContainEqual(savePokemonAction(pokemon));
    });

    it('should load and handle pokemon in case of fail', async () => {
      // we push all dispatched actions to make assertions easier
      // and our tests less brittle
      const dispatchedActions = [];

      // we simulate an error by rejecting the promise
      // then we assert if our saga dispatched the action(s) correctly
      const error = 'Apollo server is down';
      apollo.fetchPokemon = jest.fn(() => Promise.reject(error));

      const fakeStore = {
          getState: () => ({
            pending: false,
            error: null,
            selectedPokemon: null,
            data: []
          }),
          dispatch: action => dispatchedActions.push(action),
      };

      // wait for saga to complete
      await runSaga(fakeStore, getPokemon, 'test1').done;

      expect(apollo.fetchPokemon.mock.calls.length).toBe(1);
      expect(dispatchedActions).toContainEqual(failGettingPokemonAction(error));
    });

  });

});