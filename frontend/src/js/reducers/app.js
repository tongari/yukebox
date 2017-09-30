// import Immutable from 'immutable';
import * as appActions from '../actions/app';
import App from '../models/App';

const playList = (state = new App(), action) => {
  switch (action.type) {
    case appActions.SET_CSRF_TOKEN: {
      return state.set('csrfToken', action.value);
    }

    case appActions.SET_LOG_IN_STATUS: {
      return state.set('isLogin', action.isLogin);
    }

    case appActions.CHANGE_DISPLAY_HEADER_TOOL: {
      return state.set('isDisplayHeaderTool', !state.get('isDisplayHeaderTool'));
    }

    case appActions.HIDE_DISPLAY_HEADER_TOOL: {
      return state.set('isDisplayHeaderTool', false);
    }

    case appActions.SHOW_YOUTUBE_PLAYER: {
      return state.withMutations((s) => {
        s.set('youtubePlayList', action.playList)
          .set('youtubePlayIdx', action.playIdx)
          .set('isYoutubeAutoPlay', action.isAutoPlay)
          .set('isDisplayYoutubePlayer', true);
      });
    }

    case appActions.HIDE_YOUTUBE_PLAYER: {
      return state.set('isDisplayYoutubePlayer', false);
    }

    case appActions.CHANGE_YOUTUBE_PLAY_IDX: {
      return state.set('youtubePlayIdx', action.idx);
    }

    default:
      return state;
  }
};

export default playList;
