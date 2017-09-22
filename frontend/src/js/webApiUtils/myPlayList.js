/**
 * プレイリストを取得
 * @param type
 * @returns {{type: *, payload: {request: {method: string, url: string}}}}
 */
export const getMyPlayList = ({ type }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'get',
        url: '/my_album',
      },
    },
  });
};


/**
 * プレイリストを作成
 * @param type
 * @param user_id
 * @param title
 * @returns {{type: *,
 * payload: {request: {method: string, url: string,
 * params: {user_id: *, title: *}}}}}
 */
export const createMyPlayList = ({ type, title }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'post',
        url: '/track_lists',
        params: {
          title: title.trim(),
        },
      },
    },
  });
};

/**
 * プレイリストのタイトルを変更
 * @param type
 * @param title
 * @param id
 * @returns {{type: *, payload: {request: {method: string, url: string, params: {title}}}}}
 */
export const updateMyPlayList = ({ type, title, editId }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'put',
        url: `/track_lists/${editId}`,
        params: {
          title: title.trim(),
        },
      },
    },
  });
};

/**
 * プレイリストを削除
 * @param type
 * @param id
 * @returns {{type: *, payload: {request: {method: string, url: string}}}}
 */
export const deleteMyPlayList = ({ type, id }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'delete',
        url: `/track_lists/${id}`,
      },
    },
  });
};

/**
 * 曲を追加
 * @param type
 * @param track_id
 * @param video_ids
 * @param track_titles
 * @returns {{type: *, payload: {request: {method: string, url: string, params: {track_id: *, video_ids: *, track_titles: *}}}}}
 */
export const createTrack = ({ type, track_id, video_ids, track_titles }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'post',
        url: '/tracks',
        params: {
          track_id,
          video_ids,
          track_titles,
        },
      },
    },
  });
};

/**
 * 曲の並び替えを編集
 * @param type
 * @param track_id
 * @param ids
 * @param track_nums
 * @returns {{type: *, payload: {request: {method: string, url: string, params: {track_id: *, ids: *, track_nums: *}}}}}
 */
export const updateTrack = ({ type, track_id, ids, track_nums }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'put',
        url: '/edit_tracks',
        params: {
          track_id,
          ids,
          track_nums,
        },
      },
    },
  });
};

/**
 * 曲を削除
 * @param type
 * @param id
 * @returns {{type: *, payload: {request: {method: string, url: string}}}}
 */
export const deleteTrack = ({ type, id }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'delete',
        url: `/tracks/${id}`,
      },
    },
  });
};
