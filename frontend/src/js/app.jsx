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
import MyPlayListEditContainer from './containers/MyPlayListEditContainer';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AppContainer />
        <div className="p-container">
          <Route exact path="/" component={PlayListContainer} />
          <Route path={routerPath.MY_PLAY_LIST} component={MyPlayListContainer} />
          <Route path={`${routerPath.MY_PLAY_LIST_EDIT}/:id`} component={MyPlayListEditContainer} />
        </div>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
