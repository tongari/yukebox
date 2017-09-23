import React from 'react';


const SearchResult = (props) => {
  const {
    searchVideoItems,
  } = props;

  return (
    <div className="p-searchModalResult">
      {
        searchVideoItems.map((item) => {
          return (
            <section className="c-cell-thin" key={item.id.videoId}>
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
