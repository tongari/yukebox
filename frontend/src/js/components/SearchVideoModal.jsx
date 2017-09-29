import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import SearchVideoForm from './SearchVideoForm';
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
    addTrack,
    urlId,
    myPlayList,
  } = props;

  return (
    <div style={modalStyle(isDisplaySearchModal)} className="p-searchModal">
      <div className="p-searchModal__body">
        <LoadingBar updateTime={1} />
        <SearchVideoForm
          searchKeyword={searchKeyword}
          changeKeyword={changeKeyword}
          searchVideo={searchVideo}
        />

        <SearchResult
          searchVideoItems={searchVideoItems}
          addTrack={addTrack}
          urlId={urlId}
          myPlayList={myPlayList}
        />
      </div>

      <button className="p-searchModal__closeModalButton" onClick={closeModal} />
    </div>
  );
};

export default SearchVideoModal;
