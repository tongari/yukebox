import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar'
import routerPath from '../config/router';
import * as appActions from './../actions/app';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitLogOut = this.onSubmitLogOut.bind(this);
    this.onClickToolBtn = this.onClickToolBtn.bind(this);
  }

  componentWillMount() {
    this.props.appActions.setCsrfToken();
    this.props.appActions.setLoginStatus();
  }

  onSubmitLogOut(e) {
    e.preventDefault();
    this.props.appActions.logout();
  }

  onClickToolBtn(e) {
    e.preventDefault();
    this.props.appActions.changeDisplayHeaderTool();
  }

  toolStyle() {
    return (this.props.store.app.get('isDisplayHeaderTool')) ? 'p-header__tool' : 'p-header__tool is-hidden';
  }

  logInOutButton() {
    if (this.props.store.app.get('isLogin')) {
      return(
        <li>
          <a className="p-header__logout" href="#" onClick={this.onSubmitLogOut}>
            ログアウト
          </a>
        </li>
      )
    } else {
      return(
        <li>
          <a href='/users/sign_in' className="p-header__logout">
            ログイン
          </a>
        </li>
      )
    }
  }

  myPlayListButton() {
    if (this.props.store.app.get('isLogin')) {
      return(
        <li>
          <Link to={routerPath.MY_PLAY_LIST} className="p-header__playList">
            自分のプレイリスト
          </Link>
        </li>
      )
    }
    return null;
  }

  editMyAccount() {
    if (this.props.store.app.get('isLogin')) {
      return(
        <li>
          <a href="/users/edit" className="p-header__Account">
            アカウント設定
          </a>
        </li>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        <header className="p-header">
          <Link to="/">
            <span className="p-header__logo" />
          </Link>
          <button className="p-header__toolBtn" onClick={this.onClickToolBtn} />
          <nav className={this.toolStyle()}>
            <ul className="p-header__toolBody c-group -space-S">
              {this.logInOutButton()}
              {this.editMyAccount()}
              {this.myPlayListButton()}
            </ul>
          </nav>
          {this.props.children}
        </header>
        <LoadingBar updateTime={1} />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);
