// import Immutable from 'immutable';
import * as appActions from '../actions/app';
import App from '../models/App';

const playList = (state = new App(), action) => {
  switch (action.type) {
    case appActions.SET_CSRF_TOKEN: {
      return state.set('csrfToken', action.value);
    }

    case appActions.CHANGE_DISPLAY_HEADER_TOOL: {
      return state.set('isDisplayHeaderTool', !state.get('isDisplayHeaderTool'));
    }

    default:
      return state;
  }
};

export default playList;
