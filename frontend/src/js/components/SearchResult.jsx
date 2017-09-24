import React from 'react';


const SearchResult = (props) => {
  const {
    searchVideoItems,
    addTrack,
    urlId,
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
                      className="p-myListCell__addTrack"
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          addTrack(urlId, item.id.videoId, item.snippet.title);
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
