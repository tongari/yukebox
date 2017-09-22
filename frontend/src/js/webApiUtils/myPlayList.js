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
        url: '/my-album',
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
export const updateMyPlayList = ({ type, title, id }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'put',
        url: `/track_lists/${id}`,
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
