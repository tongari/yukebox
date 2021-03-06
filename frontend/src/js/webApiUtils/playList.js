/**
 * プレイリストを取得
 * @param type
 * @returns {{type: *, payload: {request: {method: string, url: string}}}}
 */
export const getPlayList = ({ type }) => {
  return ({
    type,
    payload: {
      request: {
        method: 'get',
        url: '/track_lists',
      },
    },
  });
};
