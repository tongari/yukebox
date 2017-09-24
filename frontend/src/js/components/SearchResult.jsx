import React from 'react';

const addOrCheckedIcon = (videoId, myPlayList) => {
  let isChecked = false;
  for(let i = 0; i < myPlayList.length; i++){
    if (myPlayList[i].video_id === videoId) {
      isChecked = true;
      break;
    }
  }
  return {
    style : isChecked ? 'p-myListCell__checked' : 'p-myListCell__addTrack',
    isEnabled : isChecked ? false : true,
  }
};

const SearchResult = (props) => {
  const {
    searchVideoItems,
    addTrack,
    urlId,
    myPlayList,
  } = props;

  return (
    <div className="p-searchModalResult">
      {
        searchVideoItems.map((item) => {
          return (
            <section className="c-cell-thin" key={`SearchResult_${item.id.videoId}`}>
              <div className="p-myListCell__body">
                <div>
                  <img src={item.snippet.thumbnails.default.url} width={60} alt="" />
                  <div className="p-myListCell__editText">
                    <h2 className="p-myListCell__title -edit">{item.snippet.title}</h2>
                  </div>
                </div>
                <ul className="p-myListCell__tool">
                  <li>
                    <a
                      className={addOrCheckedIcon(item.id.videoId, myPlayList).style}
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          if(addOrCheckedIcon(item.id.videoId, myPlayList).isEnabled){
                            addTrack(urlId, item.id.videoId, item.snippet.title);
                          }
                        }
                      }
                    >&nbsp;</a>
                  </li>
                </ul>
              </div>
            </section>
          );
        })
      }
    </div>
  );
};

export default SearchResult;
