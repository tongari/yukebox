import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myPlayListActions from './../actions/myPlayList';


const titleInputStyle = (isDisplayTitleInput) => {
  return {
    display: (isDisplayTitleInput) ? 'block' : 'none',
  };
};

/**
 * MyPlayListContainer
 */
class MyPlayListContainer extends React.Component {
  componentWillMount() {
    this.props.myPlayListActions.getMyPlayList();
  }

  render() {
    const playListTitle = this.props.store.myPlayList.get('playListTitle');
    const myPlayList = this.props.store.myPlayList.get('myPlayList');
    const isDisplayTitleInput = this.props.store.myPlayList.get('isDisplayTitleInput');
    const isEditTitle = this.props.store.myPlayList.get('isEditTitle');

    const onChangeMyListTitle = this.props.myPlayListActions.onChangeMyListTitle;
    const onShowMyListTitleInput = this.props.myPlayListActions.onShowMyListTitleInput;
    const onShowMyListTitleInputEdit = this.props.myPlayListActions.onShowMyListTitleInputEdit;
    const onSubmitMyListTitle = this.props.myPlayListActions.onSubmitMyListTitle;
    const onSubmitUpdateMyList = this.props.myPlayListActions.onSubmitUpdateMyList;
    const onSubmitDeleteMyList = this.props.myPlayListActions.onSubmitDeleteMyList;

    return (
      <div>
        <h1>マイプレイリスト</h1>

        <a
          href="#"
          onClick={
            (e) => {
              e.preventDefault();
              onShowMyListTitleInput(false);
            }
          }
        >プレイリスト作成</a>

        <div style={titleInputStyle(isDisplayTitleInput)}>
          <textarea
            maxLength={50}
            rows={2}
            cols={30}
            placeholder="title"
            value={playListTitle}
            onChange={onChangeMyListTitle}
          />
          <a
            href="#"
            onClick={
              (e) => {
                if (isEditTitle) {
                  onSubmitUpdateMyList();
                } else {
                  onSubmitMyListTitle();
                }
              }
            }
          >{(isEditTitle) ? '編集' : '作成'}</a>
        </div>

        {
          myPlayList.map((item) => {
            return (
              <aritcle key={`myPlayList_${item.id}`}>
                <h2>{item.title}</h2>
                <a
                  href="#"
                  onClick={
                    (e) => {
                      e.preventDefault();
                      onShowMyListTitleInputEdit(item.id);
                    }
                  }
                >プレイリスト名変更</a>
                <br />
                <a
                  href="#"
                  onClick={
                    (e) => {
                      e.preventDefault();
                      onSubmitDeleteMyList(item.id);
                    }
                  }
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
