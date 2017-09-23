
/**
 * 単一のプレイリストを取得
 * @param type
 * @param id
 * @returns {{type: *, payload: {request: {method: string, url: string}}}}
 */
export const getSingleMyPlayList = ({ type, id }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'get',
        url: `/tracks/${id}`,
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
