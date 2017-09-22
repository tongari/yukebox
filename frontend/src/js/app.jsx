import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import routerPath from './config/router';
import configStore from './store/configStore';
import AppContainer from './containers/AppContainer';
import PlayListContainer from './containers/PlayListContainer';
import MyPlayListContainer from './containers/MyPlayListContainer';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AppContainer />
        <Route exact path="/" component={PlayListContainer} />
        <Route path={routerPath.MY_PLAY_LIST} component={MyPlayListContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
