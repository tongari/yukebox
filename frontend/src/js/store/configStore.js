import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { loadingBarReducer, loadingBarMiddleware } from 'react-redux-loading-bar'
import reducers from '../reducers/index';
import httpRequestMiddleware from '../middleware/httpRequestMiddleware';

export default function configureStore() {
  // prod環境か否かを返却
  const isProdEnv = () => (process.env.NODE_ENV === 'prod');

  const middleware = [
    thunk,
    httpRequestMiddleware,
    loadingBarMiddleware(),
  ];

  // chromeのreduxdevtoolをprod環境以外に適用
  const addReduxDevTool = () => (
    !isProdEnv() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined
  );
  const composeEnhancers = addReduxDevTool() || compose;

  const addReducers = Object.assign(reducers, {
    routing: routerReducer,
    loadingBar: loadingBarReducer,
  });

  const store = createStore(
    combineReducers(addReducers),
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );

  return store;
}
