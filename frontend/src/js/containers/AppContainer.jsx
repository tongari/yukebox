import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routerPath from '../config/router';
import * as appActions from './../actions/app';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.onSubmitLogOut = this.onSubmitLogOut.bind(this);
  }

  componentWillMount() {
    this.props.appActions.setCsrfToken();
  }

  onSubmitLogOut(e) {
    e.preventDefault();
    this.props.appActions.logout()
      .then(() => {
        window.location.href = '/users/sign_in';
      });
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><a href="#" onClick={this.onSubmitLogOut}>ログアウト</a></li>
            <li><Link to="/">PlayList</Link></li>
            <li><Link to={routerPath.MY_PLAY_LIST}>MyPlayList</Link></li>
          </ul>
        </nav>
        {this.props.children}
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
)(AppContainer);
