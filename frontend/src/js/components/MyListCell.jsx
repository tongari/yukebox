import React from 'react';
import { Link } from 'react-router-dom';
import routerPath from '../config/router';

const MyListCell = (props) => {
  const {
    myPlayList,
    deleteMyListTitle,
  } = props;

  return (
    <div>
      {
        myPlayList.map((item) => {
          return (
            <section className="c-cell-thin" key={`myPlayList_${item.id}`}>

              <div className="p-myListCell__body">
                <div>
                  <h2 className="p-myListCell__title u-space-b-XS">{item.title}</h2>
                  <img src="https://i.ytimg.com/vi/43D_nBGfuGY/mqdefault.jpg" width={320} alt="" />
                </div>
                <ul className="p-myListCell__tool">
                  <li>
                    <a
                      className="p-myListCell__play"
                      href="#"
                    >&nbsp;</a>
                  </li>
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
    </div>
  );
};

export default MyListCell;
