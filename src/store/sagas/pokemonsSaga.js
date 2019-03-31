import { call, put, takeLatest } from 'redux-saga/effects';
import types from '../actions/types';
import * as apollo from '../../apollo/pokemonsGQL';
import { savePokemonAction, failGettingPokemonAction, savePokemonsAction, failGettingPokemonsAction } from '../actions/pokemonsActions'

export function* getPokemon(action){
  try{
    const data = yield call( apollo.fetchPokemon, action.payload);
    let pokemon = null;
    if(data && data.pokemon)
      pokemon = data.pokemon;
    yield put(savePokemonAction(pokemon));
  }catch(error){
    yield put(failGettingPokemonAction(error));
  }
}

export function* getPokemons(action){
  try{
    const data = yield call( apollo.fetchPokemons, action.payload);
    let pokemons = [];
    if(data && data.pokemons)
      pokemons = data.pokemons;
    yield put(savePokemonsAction(pokemons));
  }catch(error){
    yield put(failGettingPokemonsAction(error));
  }
}

function* pokemonsSaga() {
  yield takeLatest(types.GET_POKEMON_REQUESTED, getPokemon)
  yield takeLatest(types.GET_POKEMONS_REQUESTED, getPokemons)
}

export default pokemonsSaga;