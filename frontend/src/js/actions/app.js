import * as webApiUtils from '../webApiUtils/app';

export const LOGOUT = 'LOGOUT';
export const SET_CSRF_TOKEN = 'APP_SET_CSRF_TOKEN';

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
