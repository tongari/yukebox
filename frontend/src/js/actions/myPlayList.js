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
