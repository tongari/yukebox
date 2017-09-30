import React from 'react';
import { VelocityTransitionGroup } from 'velocity-react';
import { Link } from 'react-router-dom';
import routerPath from '../config/router';

const MyListCell = (props) => {
  const {
    myPlayList,
    deleteMyListTitle,
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
        myPlayList.map((item) => {
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
                  <a
                    href="#"
                    className="p-myListCell__thumb"
                    onClick={
                      (e) => {
                        e.preventDefault();
                        showYoutubePlayer(item.tracks , 0, true);
                      }
                    }
                  >
                    <img src={`https://i.ytimg.com/vi/${thumb}/mqdefault.jpg`} width={320} alt="" />
                  </a>

                </div>
                <ul className="p-myListCell__tool">
                  <li>
                    <Link
                      to={`${routerPath.MY_PLAY_LIST_EDIT}/${item.id}`}
                      className="p-myListCell__edit"
                      href="#"
                    >&nbsp;</Link>
                  </li>
                  <li>
                    <a
                      className="p-myListCell__delete"
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          deleteMyListTitle(item.id);
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

export default MyListCell;
