import React from 'react';


const onUpDown = (id, track_num, isUp, track_id, idx, editTrack) => {
  return (e) => {
    e.preventDefault();
    editTrack(id, track_num, isUp, track_id, idx);
  }
};

const disableUpBtn = (idx) => {
  return (idx === 0) ? 'is-disable' : '';
};

const disableDownBtn = (idx, itemsLen) => {
  return (idx === itemsLen - 1) ? 'is-disable' : '';
};

const MyListEditCell = (props) => {
  const {
    myPlayList,
    editTrack,
    deleteTrack,
    urlId,
    showYoutubePlayer,
  } = props;

  return (
    <div>
      {
        myPlayList.map((item, idx) => {
          return (
            <section className="c-cell-thin" key={`MyListEditCell${item.id}`}>
              <div className="p-myListCell__body">
                <div>
                  <img src={`https://i.ytimg.com/vi/${item.video_id}/default.jpg`} width={60} alt="" />
                  <div className="p-myListCell__editText">
                    <h2 className="p-myListCell__title -edit">{item.track_title}</h2>
                  </div>
                </div>
                <ul className="p-myListCell__tool">
                  <li>
                    <a
                      className="p-myListCell__play"
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          showYoutubePlayer(myPlayList, idx);
                        }
                      }
                    >&nbsp;</a>
                  </li>
                  <li>
                    <a
                      className={`p-myListCell__up ${disableUpBtn(idx)}`}
                      href="#"
                      onClick={onUpDown(item.id, item.track_num, true, item.track_id, idx, editTrack)}
                    >&nbsp;</a>
                  </li>
                  <li>
                    <a
                      className={`p-myListCell__down ${disableDownBtn(idx, myPlayList.length)}`}
                      href="#"
                      onClick={onUpDown(item.id, item.track_num, false, item.track_id, idx, editTrack)}
                    >&nbsp;</a>
                  </li>
                  <li>
                    <a
                      className="p-myListCell__delete"
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          deleteTrack(item.id, urlId);
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

export default MyListEditCell;
