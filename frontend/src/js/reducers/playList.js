import Immutable from 'immutable';
import * as playListActions from '../actions/playList';
import PlayList from '../models/PlayList';

const playList = (state = new PlayList(), action) => {
  switch (action.type) {
    case playListActions.FETCH_PLAY_LIST: {
      return state.set('isFetching', true);
    }

    case playListActions.FETCH_PLAY_LIST_SUCCESS: {
      return state.withMutations((s) => {
        s.set('isFetching', false)
          .set('playListData', Immutable.List(action.response.data));
      });
    }

    case playListActions.FETCH_PLAY_LIST_FAILURE: {
      return state.set('isFetching', false);
    }

    default:
      return state;
  }
};

export default playList;
