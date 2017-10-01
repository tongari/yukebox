import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

const AddListModal = (props) => {
  const {
    playListTitle,
    isDisplayTitleInput,
    isEditTitle,
    onChangeMyListTitle,
    onSubmitMyListTitle,
    onClickAddListModal,
  } = props;

  if (isDisplayTitleInput) {
    return (
      <VelocityTransitionGroup
        runOnMount={true}
        enter={
          {
            animation: 'fadeIn',
            duration: 150,
          }
        }
        leave={
          {
            animation: 'fadeOut',
            duration: 50,
          }
        }
      >
      <div className="p-addListModal">
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
          <a className="c-btn-primary u-space-t-M" href="#" onClick={onSubmitMyListTitle}>{(isEditTitle) ? '編集' : '作成'}</a>
        </div>
        <button className="p-addListModal__closeModalButton" onClick={onClickAddListModal} />
      </div>
      </VelocityTransitionGroup>
    );
  }

  return null;
};

export default AddListModal;
