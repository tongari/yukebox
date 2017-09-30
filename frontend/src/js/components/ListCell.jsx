import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';

const ListCell = (props) => {
  const {
    playList,
    showYoutubePlayer,
  } = props;

  return (
    <div>
      <VelocityTransitionGroup
        runOnMount={true}
        enter={
          {
            animation: 'fadeIn',
            duration: 250,
            stagger: 100,
            delay: 250,
          }
        }
        leave={
          {
            animation: 'fadeOut',
            duration: 50,
          }
        }
      >
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
                  <button
                    onClick={
                      (e) => {
                        showYoutubePlayer(item.tracks , 0, true);
                      }
                    }
                  >
                    <img src={`https://i.ytimg.com/vi/${thumb}/mqdefault.jpg`} width={320} alt="" />
                  </button>
                </div>
                <ul className="p-myListCell__tool">
                  <li>
                    <a
                      className="p-myListCell__play"
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          showYoutubePlayer(item.tracks , 0, true);
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
      </VelocityTransitionGroup>
    </div>
  );
};

export default ListCell;
