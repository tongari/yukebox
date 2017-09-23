import * as webApiUtils from '../webApiUtils/myPlayList';

export const GET_MY_PLAYLIST = 'GET_MY_PLAYLIST';
export const GET_MY_PLAYLIST_SUCCESS = 'GET_MY_PLAYLIST_SUCCESS';
export const GET_MY_PLAYLIST_FAILURE = 'GET_MY_PLAYLIST_FAILURE';

export const CREATE_MY_PLAYLIST = 'CREATE_MY_PLAYLIST';
export const CREATE_MY_PLAYLIST_SUCCESS = 'CREATE_MY_PLAYLIST_SUCCESS';
export const CREATE_MY_PLAYLIST_FAILURE = 'CREATE_MY_PLAYLIST_FAILURE';

export const UPDATE_MY_PLAYLIST_TITLE = 'UPDATE_MY_PLAYLIST_TITLE';
export const UPDATE_MY_PLAYLIST_TITLE_SUCCESS = 'UPDATE_MY_PLAYLIST_TITLE_SUCCESS';
export const UPDATE_MY_PLAYLIST_TITLE_FAILURE = 'UPDATE_MY_PLAYLIST_TITLE_FAILURE';

export const DELETE_MY_PLAYLIST = 'DELETE_MY_PLAYLIST';
export const DELETE_MY_PLAYLIST_SUCCESS = 'DELETE_MY_PLAYLIST_SUCCESS';
export const DELETE_MY_PLAYLIST_FAILURE = 'DELETE_MY_PLAYLIST_FAILURE';

export const CHANGE_MY_LIST_TITLE = 'CHANGE_MY_LIST_TITLE';
export const SHOW_MY_LIST_TITLE_INPUT = 'SHOW_MY_LIST_TITLE_INPUT';
export const HIDE_MY_LIST_TITLE_INPUT = 'HIDE_MY_LIST_TITLE_INPUT';
export const SHOW_MY_LIST_TITLE_INPUT_EDIT = 'SHOW_MY_LIST_TITLE_INPUT_EDIT';
export const SHOW_ADD_TRACK = 'SHOW_ADD_TRACK';
export const SHOW_EDIT_TRACK = 'SHOW_EDIT_TRACK';


export const ADD_TRACK = 'ADD_TRACK';
export const ADD_TRACK_SUCCESS = 'ADD_TRACK_SUCCESS';
export const ADD_TRACK_FAILURE = 'ADD_TRACK_FAILURE';

export const EDIT_TRACK = 'EDIT_TRACK';
export const EDIT_TRACK_SUCCESS = 'EDIT_TRACK_SUCCESS';
export const EDIT_TRACK_FAILURE = 'EDIT_TRACK_FAILURE';

export const DELETE_TRACK = 'DELETE_TRACK';
export const DELETE_TRACK_SUCCESS = 'DELETE_TRACK_SUCCESS';
export const DELETE_TRACK_FAILURE = 'DELETE_TRACK_FAILURE';


export const getMyPlayList = () => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.getMyPlayList({
        type: GET_MY_PLAYLIST,
      }),
    );
  };
};

export const changeMyListTitle = (title) => {
  return {
    type: CHANGE_MY_LIST_TITLE,
    title,
  };
};

export const showMyListTitleInput = () => {
  return {
    type: SHOW_MY_LIST_TITLE_INPUT,
  };
};

export const hideMyListTitleInput = () => {
  return {
    type: HIDE_MY_LIST_TITLE_INPUT,
  };
};

export const showMyListTitleInputEdit = (editId) => {
  return {
    type: SHOW_MY_LIST_TITLE_INPUT_EDIT,
    isEdit: true,
    editId,
  };
};


export const createMyListTitle = () => {
  return (dispatch, getState) => {
    const title = getState().myPlayList.get('playListTitle');
    return dispatch(
      webApiUtils.createMyPlayList({
        type: CREATE_MY_PLAYLIST,
        title,
      }),
    );
  };
};

export const updateMyListTitle = () => {
  return (dispatch, getState) => {
    const title = getState().myPlayList.get('playListTitle');
    const editId = getState().myPlayList.get('editId');
    return dispatch(
      webApiUtils.updateMyPlayList({
        type: UPDATE_MY_PLAYLIST_TITLE,
        title,
        editId,
      }),
    );
  };
};

export const deleteMyListTitle = (id) => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.deleteMyPlayList({
        type: DELETE_MY_PLAYLIST,
        id,
      }),
    );
  };
};


export const showAddTrack = (editId) => {
  return {
    type: SHOW_ADD_TRACK,
    editId,
  };
};

export const showEditTrack = (editId) => {
  return {
    type: SHOW_EDIT_TRACK,
    editId,
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
