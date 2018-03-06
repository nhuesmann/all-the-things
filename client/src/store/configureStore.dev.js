/* eslint global-require: "off" */
/* eslint no-underscore-dangle: "off" */

import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'; // just use logger!
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../reducers';
import initialState from './initialState';

// const logger = store => next => action => {
//   console.log('[Middleware] Dispatching', action);
//   const result = next(action);
//   console.log('[Middleware] Next state', store.getState());
//   return result;
// };

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
