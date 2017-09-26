import React from 'react';


const MyListEditTool = (props) => {
  const {
    showSearchModal,
    myPlayList,
    showYoutubePlayer,
  } = props;

  return (
    <div className="p-myPlayListEditTool u-text-right">
      <a
        className="p-myPlayListEditTool__addTrack"
        href="#"
        onClick={
          (e) => {
            e.preventDefault();
            showSearchModal();
          }
        }
      >曲を追加</a>
      <a
        className="p-myListCell__play"
        href="#"
        onClick={
          (e) => {
            e.preventDefault();
            showYoutubePlayer(myPlayList , 0, true);
          }
        }
      >全て再生</a>
    </div>
  );
};

export default MyListEditTool;
