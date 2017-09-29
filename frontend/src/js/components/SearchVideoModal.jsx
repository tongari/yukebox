import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import SearchVideoForm from './SearchVideoForm';
import SearchResult from './SearchResult';
import { VelocityTransitionGroup } from 'velocity-react';


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

  if (isDisplaySearchModal) {
    return(
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
      <div className="p-searchModal">
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
      </VelocityTransitionGroup>
    )
  }

  return null;
};

export default SearchVideoModal;
