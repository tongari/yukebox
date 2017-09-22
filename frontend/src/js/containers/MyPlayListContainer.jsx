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
    this.onShowMyListTitleInput = this.onShowMyListTitleInput.bind(this);
    this.onSubmitMyListTitle = this.onSubmitMyListTitle.bind(this);
    this.onSubmitDeleteMyListTitle = this.onSubmitDeleteMyListTitle.bind(this);
  }

  componentWillMount() {
    this.props.myPlayListActions.getMyPlayList();
  }

  onChangeMyListTitle(e) {
    this.props.myPlayListActions.changeMyListTitle(e.target.value);
  }

  onShowMyListTitleInput(e) {
    e.preventDefault();
    this.props.myPlayListActions.showMyListTitleInput();
  }

  onShowMyListTitleInputEdit(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.onShowMyListTitleInputEdit(id);
  }

  onSubmitMyListTitle(e) {
    e.preventDefault();
    if (this.props.store.myPlayList.get('isEditTitle')) {
      this.props.myPlayListActions.submitUpdateMyListTitle();
    } else {
      this.props.myPlayListActions.submitCreateMyListTitle();
    }
  }

  onSubmitDeleteMyListTitle(id, e) {
    e.preventDefault();
    this.props.myPlayListActions.submitDeleteMyListTitle(id);
  }

  titleInputStyle() {
    return {
      display: (this.props.store.myPlayList.get('isDisplayTitleInput')) ? 'block' : 'none',
    };
  }

  render() {
    const isEditTitle = this.props.store.myPlayList.get('isEditTitle');
    const playListTitle = this.props.store.myPlayList.get('playListTitle');
    const myPlayList = this.props.store.myPlayList.get('myPlayList');

    return (
      <div>
        <h1>マイプレイリスト</h1>
        <a href="#" onClick={this.onShowMyListTitleInput}>プレイリスト作成</a>
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

        {
          myPlayList.map((item) => {
            return (
              <aritcle key={`myPlayList_${item.id}`}>
                <h2>{item.title}</h2>
                <a
                  href="#"
                  onClick={this.onShowMyListTitleInputEdit.bind(this, item.id)}
                >プレイリスト名変更</a>
                <br />
                <a
                  href="#"
                  onClick={this.onSubmitDeleteMyListTitle.bind(this, item.id)}
                >プレイリスト削除</a>
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
