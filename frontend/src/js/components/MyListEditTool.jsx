import React from 'react';


const MyListEditTool = (props) => {
  // const {} = props;

  return (
    <div className="p-myPlayListEditTool u-text-right">
      <a
        className="p-myPlayListEditTool__addTrack"
        href="#"
      >曲を追加</a>
      <a
        className="p-myListCell__play"
        href="#"
      >全て再生</a>
    </div>
  );
};

export default MyListEditTool;
