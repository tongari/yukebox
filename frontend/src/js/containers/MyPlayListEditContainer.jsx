import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myPlayListEditActions from './../actions/myPlayListEdit';
import * as appActions from './../actions/app';

import MyListEditTool from '../components/MyListEditTool';
import MyPlayListEditCell from '../components/MyListEditCell';
import SearchVideoModal from '../components/SearchVideoModal';

/**
 * MyPlayListEditContainer
 */
class MyPlayListEditContainer extends React.Component {
  componentWillMount() {
    this.props.myPlayListEditActions.getSingleMyPlayList(this.props.match.params.id);
  }

  render() {
    const myPlayList = this.props.myPlayListEdit.get('myPlayList');
    const isDisplaySearchModal = this.props.myPlayListEdit.get('isDisplaySearchModal');
    const searchKeyword = this.props.myPlayListEdit.get('searchKeyword');
    const searchVideoItems = this.props.myPlayListEdit.get('searchVideoItems');
    const myPlayListEditActions = this.props.myPlayListEditActions;
    return (
      <div>
        <MyListEditTool
          showSearchModal={myPlayListEditActions.showSearchModal}
          myPlayList={myPlayList}
          showYoutubePlayer={this.props.appActions.showYoutubePlayer}
        />
        <MyPlayListEditCell
          myPlayList={myPlayList}
          editTrack={myPlayListEditActions.editTrack}
          deleteTrack={myPlayListEditActions.deleteTrack}
          urlId={this.props.match.params.id}
          showYoutubePlayer={this.props.appActions.showYoutubePlayer}
        />
        <SearchVideoModal
          isDisplaySearchModal={isDisplaySearchModal}
          searchKeyword={searchKeyword}
          changeKeyword={myPlayListEditActions.changeKeyword}
          searchVideo={myPlayListEditActions.searchVideo}
          closeModal={myPlayListEditActions.hideSearchModal}
          addTrack={myPlayListEditActions.addTrack}
          searchVideoItems={searchVideoItems}
          urlId={this.props.match.params.id}
          myPlayList={myPlayList}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myPlayListEdit: state.myPlayListEdit,
});
const mapDispatchToProps = dispatch => ({
  myPlayListEditActions: bindActionCreators(myPlayListEditActions, dispatch),
  appActions: bindActionCreators(appActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPlayListEditContainer);
