import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routerPath from '../config/router';
import * as appActions from './../actions/app';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmitLogOut = this.onSubmitLogOut.bind(this);
    this.onClickToolBtn = this.onClickToolBtn.bind(this);
  }

  componentWillMount() {
    this.props.appActions.setCsrfToken();
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

  render() {
    return (
      <header className="p-header">
        <span className="p-header__logo" />
        <button className="p-header__toolBtn" onClick={this.onClickToolBtn} />
        <nav className={this.toolStyle()}>
          <ul className="p-header__toolBody c-group -space-S">
            <li>
              <a className="p-header__logout" href="#" onClick={this.onSubmitLogOut}>
                ログアウト
              </a>
            </li>
            <li>
              <Link to="/" className="p-header__playList">
                みんなのプレイリスト
              </Link>
            </li>
            <li>
              <Link to={routerPath.MY_PLAY_LIST} className="p-header__playList">
                自分のプレイリスト
              </Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </header>
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
)(AppContainer);
