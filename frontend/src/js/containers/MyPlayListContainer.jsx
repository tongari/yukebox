import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myPlayListActions from './../actions/myPlayList';


/**
 * MyPlayListContainer
 */
class MyPlayListContainer extends React.Component {
  constructor() {
    super();
    this.onChangeMyListTitle = this.onChangeMyListTitle.bind(this);
    this.onClickMyListTitleInput = this.onClickMyListTitleInput.bind(this);
    this.onSubmitMyListTitle = this.onSubmitMyListTitle.bind(this);
    this.onSubmitDeleteMyListTitle = this.onSubmitDeleteMyListTitle.bind(this);
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

  onClickMyListTitleInputEdit(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.showMyListTitleInputEdit(id);
  }

  onSubmitMyListTitle(e) {
    e.preventDefault();
    if (this.props.store.myPlayList.get('isEditTitle')) {
      this.props.myPlayListActions.updateMyListTitle();
    } else {
      this.props.myPlayListActions.createMyListTitle();
    }
  }

  onSubmitDeleteMyListTitle(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.deleteMyListTitle(id);
  }

  onClickShowAddTrack(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.showAddTrack(id);
  }

  onClickShowEditTrack(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.showEditTrack(id);
  }

  onSubmitAddTrack(e) {
    e.preventDefault();
    this.props.myPlayListActions.addTrack();
  }

  onSubmitEditTrack(e) {
    e.preventDefault();
    this.props.myPlayListActions.editTrack();
  }

  onSubmitDeleteTrack(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.deleteTrack(id);
  }

  titleInputStyle() {
    return {
      display: (this.props.store.myPlayList.get('isDisplayTitleInput')) ? 'block' : 'none',
    };
  }

  addTrackStyle() {
    return {
      display: (this.props.store.myPlayList.get('isDisplayAddTrack')) ? 'block' : 'none',
    };
  }

  render() {
    const isEditTitle = this.props.store.myPlayList.get('isEditTitle');
    const playListTitle = this.props.store.myPlayList.get('playListTitle');
    const myPlayList = this.props.store.myPlayList.get('myPlayList');

    return (
      <div>
        <h1>マイプレイリスト</h1>
        <a href="#" onClick={this.onClickMyListTitleInput}>プレイリスト作成</a>
        <div style={this.titleInputStyle()}>
          <textarea
            maxLength={50}
            rows={2}
            cols={30}
            placeholder="title"
            value={playListTitle}
            onChange={this.onChangeMyListTitle}
          />
          <a href="#" onClick={this.onSubmitMyListTitle}>{(isEditTitle) ? '編集' : '作成'}</a>
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


        {
          myPlayList.map((item) => {
            return (
              <aritcle key={`myPlayList_${item.id}`}>
                <h2>{item.title}</h2>
                <a
                  href="#"
                  onClick={this.onClickMyListTitleInputEdit.bind(this, item.id)}
                >プレイリスト名変更</a>
                <br />
                <a
                  href="#"
                  onClick={this.onSubmitDeleteMyListTitle.bind(this, item.id)}
                >プレイリスト削除</a>
                <br />
                <a
                  href="#"
                  onClick={this.onClickShowAddTrack.bind(this, item.id)}
                >曲の追加</a>
                <br />
                <a
                  href="#"
                  onClick={this.onClickShowEditTrack.bind(this, item.id)}
                >曲の並べ替え</a>
                <br />
                <a
                  href="#"
                  onClick={this.onSubmitDeleteTrack.bind(this, 17)}
                >曲の削除</a>
              </aritcle>

            );
          })
        }
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
