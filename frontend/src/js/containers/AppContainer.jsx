import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import routerPath from '../config/router';
import * as appActions from './../actions/app';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.appActions.setCsrfToken();
  }
  render() {
    return (
      <div>
        <nav>
          <ul>
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
