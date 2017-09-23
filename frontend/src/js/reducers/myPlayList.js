// import Immutable from 'immutable';
import * as actions from '../actions/myPlayList';
import MyPlayList from '../models/MyPlayList';

const myPlayList = (state = new MyPlayList(), action) => {
  switch (action.type) {
    case actions.GET_MY_PLAYLIST: {
      return state.set('isFetching', true);
    }
    case actions.GET_MY_PLAYLIST_SUCCESS: {
      return state.withMutations((s) => {
        s.set('myPlayList', action.response.data)
          .set('playListTitle', '')
          .set('isFetching', false);
      });
    }
    case actions.GET_MY_PLAYLIST_FAILURE: {
      return state.set('isFetching', false);
    }


    case actions.CREATE_MY_PLAYLIST: {
      return state.withMutations((s) => {
        s.set('isDisplayTitleInput', false)
          .set('isFetching', true);
      });
    }
    case actions.CREATE_MY_PLAYLIST_SUCCESS: {
      return state.withMutations((s) => {
        s.set('myPlayList', action.response.data)
          .set('playListTitle', '')
          .set('isFetching', false);
      });
    }
    case actions.CREATE_MY_PLAYLIST_FAILURE: {
      return state.set('isFetching', false);
    }

    case actions.UPDATE_MY_PLAYLIST_TITLE: {
      return state.set('isFetching', true);
    }
    case actions.UPDATE_MY_PLAYLIST_TITLE_SUCCESS: {
      return state.withMutations((s) => {
        s.set('myPlayList', action.response.data)
          .set('playListTitle', '')
          .set('isFetching', false);
      });
    }
    case actions.UPDATE_MY_PLAYLIST_TITLE_FAILURE: {
      return state.set('isFetching', false);
    }
    case actions.DELETE_MY_PLAYLIST: {
      return state.set('isFetching', true);
    }
    case actions.DELETE_MY_PLAYLIST_SUCCESS: {
      return state.withMutations((s) => {
        s.set('myPlayList', action.response.data)
          .set('isFetching', false);
      });
    }
    case actions.DELETE_MY_PLAYLIST_FAILURE: {
      return state.set('isFetching', false);
    }

    case actions.CHANGE_MY_LIST_TITLE: {
      return state.set('playListTitle', action.title);
    }
    case actions.SHOW_MY_LIST_TITLE_INPUT: {
      return state.withMutations((s) => {
        s.set('isDisplayTitleInput', true)
          .set('isEditTitle', false);
      });
    }
    case actions.HIDE_MY_LIST_TITLE_INPUT: {
      return state.withMutations((s) => {
        s.set('isDisplayTitleInput', false)
          .set('isEditTitle', false);
      });
    }
    case actions.SHOW_MY_LIST_TITLE_INPUT_EDIT: {
      return state.withMutations((s) => {
        s.set('isDisplayTitleInput', true)
          .set('isEditTitle', true)
          .set('editId', action.editId);
      });
    }

    default:
      return state;
  }
};

export default myPlayList;
