import * as webApiUtils from '../webApiUtils/myPlayListEdit';

export const GET_SINGLE_MY_PLAYLIST = 'GET_SINGLE_MY_PLAYLIST';
export const GET_SINGLE_MY_PLAYLIST_SUCCESS = 'GET_SINGLE_MY_PLAYLIST_SUCCESS';
export const GET_SINGLE_MY_PLAYLIST_FAILURE = 'GET_SINGLE_MY_PLAYLIST_FAILURE';

export const ADD_TRACK = 'ADD_TRACK';
export const ADD_TRACK_SUCCESS = 'ADD_TRACK_SUCCESS';
export const ADD_TRACK_FAILURE = 'ADD_TRACK_FAILURE';

export const EDIT_TRACK = 'EDIT_TRACK';
export const EDIT_TRACK_SUCCESS = 'EDIT_TRACK_SUCCESS';
export const EDIT_TRACK_FAILURE = 'EDIT_TRACK_FAILURE';

export const DELETE_TRACK = 'DELETE_TRACK';
export const DELETE_TRACK_SUCCESS = 'DELETE_TRACK_SUCCESS';
export const DELETE_TRACK_FAILURE = 'DELETE_TRACK_FAILURE';

export const SHOW_SEARCH_MODAL = 'SHOW_SEARCH_MODAL';
export const HIDE_SEARCH_MODAL = 'HIDE_SEARCH_MODAL';
export const CHANGE_KEYWORD = 'CHANGE_KEYWORD';

export const SEARCH_VIDEO = 'SEARCH_VIDEO';
export const SEARCH_VIDEO_SUCCESS = 'SEARCH_VIDEO_SUCCESS';
export const SEARCH_VIDEO_FAILURE = 'SEARCH_VIDEO_FAILURE';

export const showSearchModal = () => {
  document.querySelector('body').style.overflow = 'hidden';
  return ({
    type: SHOW_SEARCH_MODAL,
  });
};

export const hideSearchModal = () => {
  document.querySelector('body').style.overflow = '';
  return ({
    type: HIDE_SEARCH_MODAL,
  });
};

export const changeKeyword = (keyword) => {
  return ({
    type: CHANGE_KEYWORD,
    keyword,
  });
};

export const searchVideo = () => {
  return (dispatch, getState) => {
    const keyword = getState().myPlayListEdit.get('searchKeyword');
    return dispatch(
      webApiUtils.getYoutubeVideo({
        type: SEARCH_VIDEO,
        keyword,
      }),
    );
  };
};


export const getSingleMyPlayList = (id) => {
  return (dispatch, getState) => {
    return dispatch(
      webApiUtils.getSingleMyPlayList({
        type: GET_SINGLE_MY_PLAYLIST,
        id,
      }),
    );
  };
};


export const addTrack = (id, videoId, title) => {
  return (dispatch, getState) => {
    // 一括登録する場合
    // const store = getState();
    // const tracks = store.myPlayList.get('addTracks').toArray();
    // const videoIds = tracks.map((item) => {
    //   return item.videoId;
    // });
    //
    // const titles = tracks.map((item) => {
    //   return item.title;
    // });

    return dispatch(
      webApiUtils.createTrack({
        type: ADD_TRACK,
        track_id: id,
        video_ids: [videoId],
        track_titles: [title],
      }),
    );
  };
};


export const editTrack = (id, track_num, isUp, track_id, idx) => {
  return (dispatch, getState) => {
    // 順番の制御
    const myPlayList = getState().myPlayListEdit.get('myPlayList');

    let ids =[];
    let trackNums =[];

    if (isUp) {
      ids.push(myPlayList[idx-1].id);
      ids.push(myPlayList[idx].id);
    } else if (!isUp) {
      ids.push(myPlayList[idx].id);
      ids.push(myPlayList[idx+1].id);
    }

    // track_numを入れ替え
    if (isUp) {
      trackNums.push(myPlayList[idx].track_num);
      trackNums.push(myPlayList[idx-1].track_num);
    } else if (!isUp) {
      trackNums.push(myPlayList[idx+1].track_num);
      trackNums.push(myPlayList[idx].track_num);
    }

    return dispatch(
      webApiUtils.updateTrack({
        type: EDIT_TRACK,
        track_id,
        ids,
        track_nums: trackNums,
      }),
    );
  };
};

export const deleteTrack = (id, track_id) => {
  return (dispatch, getState) => {
    return dispatch(
      webApiUtils.deleteTrack({
        type: DELETE_TRACK,
        id,
        track_id,
      }),
    );
    // TODO 削除あとに順番を変更するために、ここでbulkEdit
  };
};
