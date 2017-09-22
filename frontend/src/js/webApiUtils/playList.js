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
