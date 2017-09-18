export const FETCH_PLAY_LIST = Symbol('FETCH_PLAY_LIST');

export const fetchPlayList = value => ({ type: FETCH_PLAY_LIST, value });
