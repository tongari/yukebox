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

export const CHANGE_MY_LIST_TITLE = 'CHANGE_MY_LIST_TITLE';
export const SHOW_MY_LIST_TITLE_INPUT = 'SHOW_MY_LIST_TITLE_INPUT';
export const SHOW_MY_LIST_TITLE_INPUT_EDIT = 'SHOW_MY_LIST_TITLE_INPUT_EDIT';


const createMyPlayList = (title) => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.createMyPlayList({
        type: CREATE_MY_PLAYLIST,
        title,
      }),
    );
  };
};

const updateMyPlayList = (title, id) => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.updateMyPlayList({
        type: UPDATE_MY_PLAYLIST_TITLE,
        title,
        id,
      }),
    );
  };
};

const deleteMyPlayList = (id) => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.deleteMyPlayList({
        type: UPDATE_MY_PLAYLIST_TITLE,
        id,
      }),
    );
  };
};


export const getMyPlayList = () => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.getMyPlayList({
        type: GET_MY_PLAYLIST,
      }),
    );
  };
};


export const onChangeMyListTitle = (e) => {
  return {
    type: CHANGE_MY_LIST_TITLE,
    title: e.target.value,
  };
};

export const onShowMyListTitleInput = () => {
  return {
    type: SHOW_MY_LIST_TITLE_INPUT,
  };
};

export const onShowMyListTitleInputEdit = (editId) => {
  return {
    type: SHOW_MY_LIST_TITLE_INPUT_EDIT,
    isEdit: true,
    editId,
  };
};


export const onSubmitMyListTitle = () => {
  return (dispatch, getState) => {
    const title = getState().myPlayList.get('playListTitle');
    return dispatch(createMyPlayList(title));
  };
};

export const onSubmitUpdateMyList = () => {
  return (dispatch, getState) => {
    const title = getState().myPlayList.get('playListTitle');
    const editId = getState().myPlayList.get('editId');
    return dispatch(updateMyPlayList(title, editId));
  };
};

export const onSubmitDeleteMyList = (id) => {
  return (dispatch) => {
    return dispatch(deleteMyPlayList(id));
  };
};
