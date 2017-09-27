import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playListActions from './../actions/playList';
import * as appActions from './../actions/app';

import ListCell from '../components/ListCell';

/**
 * PlayListContainer
 */
class PlayListContainer extends React.Component {
  componentWillMount() {
    this.props.playListActions.fetchPlayList();
  }

  render() {
    return (
      <div>
        <ListCell
          playList={this.props.playList.get('playListData')}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playList: state.playList,
});
const mapDispatchToProps = dispatch => ({
  playListActions: bindActionCreators(playListActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayListContainer);
