import React from 'react';
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
  } = props;

  return (
    <div style={modalStyle(isDisplaySearchModal)} className="p-searchModal">
      <div className="p-searchModal__body">

        <SearchVideoForm
          searchKeyword={searchKeyword}
          changeKeyword={changeKeyword}
          searchVideo={searchVideo}
        />

        <SearchResult
          searchVideoItems={searchVideoItems}
          addTrack={addTrack}
          urlId={urlId}
        />
      </div>

      <button className="p-searchModal__closeModalButton" onClick={closeModal} />
    </div>
  );
};

export default SearchVideoModal;
