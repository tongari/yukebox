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
              <a
                className="p-listCell"
                href="#"
                onClick={
                  (e) => {
                    e.preventDefault();
                    showYoutubePlayer(item.tracks , 0, true);
                  }
                }
              >
                <div className="p-listCell__thumb">
                  <img src={`https://i.ytimg.com/vi/${thumb}/mqdefault.jpg`} width={320} alt="" />
                </div>
                <div className="p-listCell__info c-group -space-XS">
                  <h2 className="p-listCell__title u-space-b-M">{item.title}</h2>
                  <img className="p-listCell__userThumb" src={item.user.image_url} width={40} alt="" />
                  <p>{item.user.name}</p>
                </div>
              </a>
            </section>
          );
        })
      }
      </VelocityTransitionGroup>
    </div>
  );
};

export default ListCell;
