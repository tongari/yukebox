import React from 'react';

const MyListCell = (props) => {
  const {
    myPlayList,
    showMyListTitleInputEdit,
    deleteMyListTitle,
    showAddTrack,
    showEditTrack,
    deleteTrack,
  } = props;

  return (
    <div>
      {
        myPlayList.map((item) => {
          return (
            <aritcle className="c-cell" key={`myPlayList_${item.id}`}>
              <h2>{item.title}</h2>
              <a
                href="#"
                onClick={
                  (e) => {
                    e.preventDefault();
                    showMyListTitleInputEdit(item.id);
                  }
                }
              >プレイリスト名変更</a>
              <br />
              <a
                href="#"
                onClick={
                  (e) => {
                    e.preventDefault();
                    deleteMyListTitle(item.id);
                  }
                }
              >プレイリスト削除</a>
              <br />
              <a
                href="#"
                onClick={
                  (e) => {
                    e.preventDefault();
                    showAddTrack(item.id);
                  }
                }
              >曲の追加</a>
              <br />
              <a
                href="#"
                onClick={
                  (e) => {
                    e.preventDefault();
                    showEditTrack(item.id);
                  }
                }
              >曲の並べ替え</a>
              <br />
              <a
                href="#"
                onClick={
                  (e) => {
                    e.preventDefault();
                    deleteTrack(17);
                  }
                }
              >曲の削除</a>
            </aritcle>
          );
        })
      }
    </div>
  );
};

export default MyListCell;
