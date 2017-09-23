// import Immutable from 'immutable';
import * as actions from '../actions/myPlayListEdit';
import MyPlayListEdit from '../models/MyPlayListEdit';

const myPlayListEdit = (state = new MyPlayListEdit(), action) => {
  switch (action.type) {
    case actions.GET_SINGLE_MY_PLAYLIST: {
      return state.set('isFetching', true);
    }
    case actions.GET_SINGLE_MY_PLAYLIST_SUCCESS: {
      return state.withMutations((s) => {
        s.set('myPlayList', action.response.data)
          .set('isFetching', false);
      });
    }
    case actions.GET_SINGLE_MY_PLAYLIST_FAILURE: {
      return state.set('isFetching', false);
    }

    default:
      return state;
  }
};

export default myPlayListEdit;
