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
    this.props.appActions.hideDisplayHeaderTool();
  }

  render() {
    return (
      <div>
        <h1 className="p-myPlayList__title">みんなのプレイリスト</h1>
        <ListCell
          playList={this.props.playList.get('playListData')}
          showYoutubePlayer={this.props.appActions.showYoutubePlayer}
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
