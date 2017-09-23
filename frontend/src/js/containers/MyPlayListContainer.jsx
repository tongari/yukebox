import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myPlayListActions from './../actions/myPlayList';

import AddListModal from '../components/AddListModal';
import MyListCell from '../components/MyListCell';

/**
 * MyPlayListContainer
 */
class MyPlayListContainer extends React.Component {
  constructor() {
    super();
    this.onChangeMyListTitle = this.onChangeMyListTitle.bind(this);
    this.onClickMyListTitleInput = this.onClickMyListTitleInput.bind(this);
    this.onClickAddListModal = this.onClickAddListModal.bind(this);
    this.onSubmitMyListTitle = this.onSubmitMyListTitle.bind(this);
    this.onSubmitAddTrack = this.onSubmitAddTrack.bind(this);
  }

  componentWillMount() {
    this.props.myPlayListActions.getMyPlayList();
  }

  onChangeMyListTitle(e) {
    this.props.myPlayListActions.changeMyListTitle(e.target.value);
  }

  onClickMyListTitleInput(e) {
    e.preventDefault();
    this.props.myPlayListActions.showMyListTitleInput();
  }

  onClickAddListModal(e) {
    e.preventDefault();
    this.props.myPlayListActions.hideMyListTitleInput();
  }

  onSubmitMyListTitle(e) {
    e.preventDefault();
    if (this.props.store.myPlayList.get('isEditTitle')) {
      this.props.myPlayListActions.updateMyListTitle();
    } else {
      this.props.myPlayListActions.createMyListTitle();
    }
  }

  onSubmitAddTrack(e) {
    e.preventDefault();
    this.props.myPlayListActions.addTrack();
  }

  onSubmitEditTrack(e) {
    e.preventDefault();
    this.props.myPlayListActions.editTrack();
  }

  addTrackStyle() {
    return {
      display: (this.props.store.myPlayList.get('isDisplayAddTrack')) ? 'block' : 'none',
    };
  }

  render() {
    const isDisplayTitleInput = this.props.store.myPlayList.get('isDisplayTitleInput');
    const isEditTitle = this.props.store.myPlayList.get('isEditTitle');
    const playListTitle = this.props.store.myPlayList.get('playListTitle');
    const myPlayList = this.props.store.myPlayList.get('myPlayList');

    const { myPlayListActions } = this.props;

    return (
      <div>
        <div className="p-myPlayList">
          <h1 className="p-myPlayList__title">マイプレイリスト</h1>
          <div className="p-myPlayList__addList">
            <a
              href="#"
              className="p-myPlayList__addListBtn"
              onClick={this.onClickMyListTitleInput}
            >プレイリスト作成</a>
          </div>

          <div style={this.addTrackStyle()}>
            <a
              href="#"
              onClick={this.onSubmitAddTrack}
            >曲の追加</a>
            <br />
            <a
              href="#"
              onClick={this.onSubmitEditTrack.bind(this)}
            >曲の並び替え</a>
          </div>

          <MyListCell
            myPlayList={myPlayList}
            deleteMyListTitle={myPlayListActions.deleteMyListTitle}
          />
        </div>
        <AddListModal
          playListTitle={playListTitle}
          isDisplayTitleInput={isDisplayTitleInput}
          isEditTitle={isEditTitle}
          onChangeMyListTitle={this.onChangeMyListTitle}
          onSubmitMyListTitle={this.onSubmitMyListTitle}
          onClickAddListModal={this.onClickAddListModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({
  myPlayListActions: bindActionCreators(myPlayListActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPlayListContainer);
