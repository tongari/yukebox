// import Immutable from 'immutable';
import * as playListActions from '../actions/playList';
import PlayList from '../models/PlayList';

const playList = (state = new PlayList(), action) => {
  switch (action.type) {
    case playListActions.FETCH_PLAY_LIST: {
      return state;
    }

    default:
      return state;
  }
};

export default playList;
