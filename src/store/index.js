import appReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const storeFactory = (initialState={}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
	return store;
};

const store = storeFactory();
export default store;