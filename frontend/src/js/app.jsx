import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import routerPath from './config/router';
import configStore from './store/configStore';
import PlayListContainer from './containers/PlayListContainer';
import MyPlayListContainer from './containers/MyPlayListContainer';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">PlayList</Link></li>
            <li><Link to={routerPath.MY_PLAY_LIST}>MyPlayList</Link></li>
          </ul>
        </nav>

        <Route exact path="/" component={PlayListContainer} />
        <Route path={routerPath.MY_PLAY_LIST} component={MyPlayListContainer} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
