import React from 'react';

const titleInputStyle = (isDisplayTitleInput) => {
  return {
    display: (isDisplayTitleInput) ? 'block' : 'none',
  };
};

const AddListModal = (props) => {
  const {
    playListTitle,
    isDisplayTitleInput,
    isEditTitle,
    onChangeMyListTitle,
    onSubmitMyListTitle,
    onClickAddListModal,
  } = props;

  return (
    <div style={titleInputStyle(isDisplayTitleInput)} className="p-addListModal">
      <div className="p-addListModal__inputArea">
        <textarea
          className="p-addListModal__input"
          maxLength={50}
          rows={2}
          cols={30}
          placeholder="50文字以内でプレイリスト名を入力してください"
          value={playListTitle}
          onChange={onChangeMyListTitle}
        />
        <a className="c-btn-default u-space-t-M" href="#" onClick={onSubmitMyListTitle}>{(isEditTitle) ? '編集' : '作成'}</a>
      </div>
      <button className="p-addListModal__closeModalButton" onClick={onClickAddListModal} />
    </div>
  );
};

export default AddListModal;
