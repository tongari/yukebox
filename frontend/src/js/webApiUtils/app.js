/**
 * ログアウト
 * @param type
 * @returns {{type: *, payload: {request: {method: string, url: string}}}}
 */
export const logout = ({ type }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'delete',
        url: '/users/sign_out',
      },
    },
  });
};
