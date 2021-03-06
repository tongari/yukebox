import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import routerPath from './config/router';
import configStore from './store/configStore';
import HeaderContainer from './containers/HeaderContainer';
import VideoModalContainer from './containers/VideoModalContainer';
import PlayListContainer from './containers/PlayListContainer';
import MyPlayListContainer from './containers/MyPlayListContainer';
import MyPlayListEditContainer from './containers/MyPlayListEditContainer';

const store = configStore();

if (document.getElementById('app')) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <HeaderContainer />
          <VideoModalContainer />
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
}


const accountDelete = document.querySelector('.js-accountDelete');
accountDelete && accountDelete.addEventListener('click', (e)=> {
  const isDelete = window.confirm('アカウントを削除しますか？');
  if (!isDelete) {
    e.preventDefault();
    return;
  }
});
