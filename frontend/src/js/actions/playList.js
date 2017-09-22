import * as webApiUtils from '../webApiUtils/playList';

export const FETCH_PLAY_LIST = 'FETCH_PLAY_LIST';
export const FETCH_PLAY_LIST_SUCCESS = 'FETCH_PLAY_LIST_SUCCESS';
export const FETCH_PLAY_LIST_FAILURE = 'FETCH_PLAY_LIST_FAILURE';

export const fetchPlayList = () => {
  return (dispatch) => {
    return dispatch(
      webApiUtils.getPlayList({
        type: FETCH_PLAY_LIST,
      }),
    );
  };
};
