import React from 'react';

const ListCell = (props) => {
  const {
    playList,
  } = props;

  return (
    <div>
      {
        playList.map((item) => {
          let thumb = '';
          if (item.tracks.length > 0) {
            const idx = Math.floor(Math.random() * item.tracks.length);
            thumb = item.tracks[idx].video_id;
          }

          return (
            <section className="c-cell-thin" key={`myPlayList_${item.id}`}>

              <div className="p-myListCell__body">
                <div>
                  <h2 className="p-myListCell__title u-space-b-XS">{item.title}</h2>
                  <img src={`https://i.ytimg.com/vi/${thumb}/mqdefault.jpg`} width={320} alt="" />
                </div>
                <ul className="p-myListCell__tool">
                  <li>
                    <a
                      className="p-myListCell__play"
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

export default ListCell;
