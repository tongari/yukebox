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


export const addTrack = () => {
  return (dispatch, getState) => {
    const store = getState();
    const trackId = store.myPlayList.get('editId');
    const tracks = store.myPlayList.get('addTracks').toArray();

    const videoIds = tracks.map((item) => {
      return item.videoId;
    });

    const titles = tracks.map((item) => {
      return item.title;
    });

    return dispatch(
      webApiUtils.createTrack({
        type: ADD_TRACK,
        track_id: trackId,
        video_ids: videoIds,
        track_titles: titles,
      }),
    );
  };
};


export const editTrack = () => {
  return (dispatch, getState) => {
    // TODO ここでmodelのeditTracksを操作
    // 順番の制御
    const store = getState();
    const trackId = store.myPlayList.get('editId');
    const tracks = store.myPlayList.get('editTracks').toArray();

    const ids = tracks.map((item) => {
      return item.id;
    });

    const trackNums = tracks.map((item) => {
      return item.trackNum;
    });

    return dispatch(
      webApiUtils.updateTrack({
        type: EDIT_TRACK,
        track_id: trackId,
        ids,
        track_nums: trackNums,
      }),
    );
  };
};

export const deleteTrack = (id) => {
  return (dispatch, getState) => {
    return dispatch(
      webApiUtils.deleteTrack({
        type: DELETE_TRACK,
        id,
      }),
    );
    // TODO 削除あとに順番を変更するために、ここでbulkEdit
  };
};
