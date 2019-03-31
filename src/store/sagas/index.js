import pokemonsSaga from './pokemonsSaga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    fork(pokemonsSaga),
  ]);
}
export default rootSaga;