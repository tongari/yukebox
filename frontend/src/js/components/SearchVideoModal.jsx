import React from 'react';
import SearchResult from './SearchResult';

const modalStyle = (isDisplaySearchModal) => {
  return {
    display: (isDisplaySearchModal) ? 'block' : 'none',
  };
};

const SearchVideoModal = (props) => {
  const {
    isDisplaySearchModal,
    searchKeyword,
    changeKeyword,
    searchVideo,
    closeModal,
    searchVideoItems,
  } = props;

  return (
    <div style={modalStyle(isDisplaySearchModal)} className="p-searchModal">
      <div className="p-searchModal__body">
        <div className="p-searchModal__inputArea">
          <form
            action="get"
            href="/"
            onSubmit={
              (e) => {
                e.preventDefault();
                searchVideo();
              }
            }
          >
            <input
              type="text"
              className="p-searchModal__input"
              maxLength={20}
              placeholder="動画を検索"
              value={searchKeyword}
              onChange={
                (e) => {
                  changeKeyword(e.target.value);
                }
              }
            />
            <button
              className="c-btn-primary u-space-t-M"
              href="#"
              onSubmit={
                (e) => {
                  e.preventDefault();
                  searchVideo();
                }
              }
            >検索</button>
          </form>
        </div>

        <SearchResult
          searchVideoItems={searchVideoItems}
        />
      </div>

      <button className="p-searchModal__closeModalButton" onClick={closeModal} />
    </div>
  );
};

export default SearchVideoModal;
