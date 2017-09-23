import React from 'react';


const MyListEditCell = (props) => {
  const {
    myPlayList,
    deleteTrack,
  } = props;

  return (
    <div>
      {
        myPlayList.map((item) => {
          return (
            <aritcle className="c-cell-thin" key={`myPlayListEdit_${item.id}`}>
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
                    >&nbsp;</a>
                  </li>
                  <li>
                    <a
                      className="p-myListCell__up"
                      href="#"
                    >&nbsp;</a>
                  </li>
                  <li>
                    <a
                      className="p-myListCell__down"
                      href="#"
                    >&nbsp;</a>
                  </li>
                  <li>
                    <a
                      className="p-myListCell__delete"
                      href="#"
                      onClick={
                        (e) => {
                          e.preventDefault();
                          deleteTrack(item.id);
                        }
                      }
                    >&nbsp;</a>
                  </li>
                </ul>
              </div>
            </aritcle>
          );
        })
      }
    </div>
  );
};

export default MyListEditCell;
