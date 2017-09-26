import * as webApiUtils from '../webApiUtils/app';

export const LOGOUT = 'LOGOUT';
export const SET_CSRF_TOKEN = 'APP_SET_CSRF_TOKEN';
export const CHANGE_DISPLAY_HEADER_TOOL = 'CHANGE_DISPLAY_HEADER_TOOL';
export const SHOW_YOUTUBE_PLAYER = 'SHOW_YOUTUBE_PLAYER';
export const HIDE_YOUTUBE_PLAYER = 'HIDE_YOUTUBE_PLAYER';
export const CHANGE_YOUTUBE_PLAY_IDX = 'CHANGE_YOUTUBE_PLAY_IDX';

/**
 * cstfトークンを保持
 * @returns {{type: string, value}}
 */
export const setCsrfToken = () => {
  const token = document.querySelector("meta[name='csrf-token']").content;
  return {
    type: SET_CSRF_TOKEN,
    value: token,
  };
};

/**
 * ログアウト
 * @returns {function(*)}
 */
export const logout = () => {
  return (dispatch) => {
    const isLogout = confirm('ログアウトしますか？');
    if (!isLogout) return Promise.resolve();

    return dispatch(
      webApiUtils.logout({
        type: LOGOUT,
      }),
    );
  };
};

export const changeDisplayHeaderTool = () => {
  return {
    type: CHANGE_DISPLAY_HEADER_TOOL,
  };
};

export const showYoutubePlayer = (playList, playIdx, isAutoPlay = false) => {
  document.querySelector('body').style.overflow = 'hidden';
  return {
    type: SHOW_YOUTUBE_PLAYER,
    playList,
    playIdx,
    isAutoPlay,
  };
};

export const hideYoutubePlayer = () => {
  document.querySelector('body').style.overflow = '';
  return {
    type: HIDE_YOUTUBE_PLAYER,
  };
};

export const changeYoutubePlayIdx = (idx) => {
  return {
    type: CHANGE_YOUTUBE_PLAY_IDX,
    idx,
  };
};
