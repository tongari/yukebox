export const FETCH_MY_PLAY_LIST = Symbol('FETCH_MY_PLAY_LIST');

export const fetchMyPlayList = value => ({ type: FETCH_MY_PLAY_LIST, value });
