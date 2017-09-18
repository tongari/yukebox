import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>react start</div>,
  document.getElementById('app'),
);

// import { Provider } from 'react-redux';
// import configStore from './store/configStore';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import routerPath from './config/router';
// import App from './containers/App';

// const store = configStore();
// const history = syncHistoryWithStore(browserHistory, store);
// const isUrlMath = _.includes(routerPath, window.location.pathname);

/*
if (isUrlMath) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={RailwayContainer} />
          <Route path={routerPath.STATION} component={CarCompositionContainer} />
          <Route path={routerPath.CAR_COMPOSITION} component={CarCompositionDetailContainer} />
          <Route path={routerPath.MAP} component={MapContainer} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
} else {
  window.location.href = '/';
}
*/
