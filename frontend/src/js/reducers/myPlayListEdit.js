import Immutable from 'immutable';
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

    case actions.SHOW_SEARCH_MODAL: {
      return state.set('isDisplaySearchModal', true);
    }
    case actions.HIDE_SEARCH_MODAL: {
      return state.set('isDisplaySearchModal', false);
    }
    case actions.CHANGE_KEYWORD: {
      return state.set('searchKeyword', action.keyword);
    }

    case actions.SEARCH_VIDEO: {
      return state.withMutations((s) => {
        s.set('searchVideoItems', Immutable.List([]))
          .set('isFetching', true);
      });
    }
    case actions.SEARCH_VIDEO_SUCCESS: {
      return state.withMutations((s) => {
        s.set('searchVideoItems', Immutable.List(action.response.items))
          .set('isFetching', false);
      });
    }
    case actions.SEARCH_VIDEO_FAILURE: {
      return state.set('isFetching', false);
    }

    case actions.ADD_TRACK: {
      return state.set('isDisplaySearchModal', true);
    }
    case actions.ADD_TRACK_SUCCESS: {
      return state.withMutations((s) => {
        s.set('myPlayList', action.response.data)
          .set('isFetching', false);
      });
    }
    case actions.ADD_TRACK_FAILURE: {
      return state.set('isFetching', false);
    }

    default:
      return state;
  }
};

export default myPlayListEdit;
