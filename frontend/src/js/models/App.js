import Immutable from 'immutable';

export default class App extends Immutable.Record({
  csrfToken: '',
  isLogin: false,
  isDisplayHeaderTool: false,
  isDisplayYoutubePlayer: false,
  youtubePlayList: Immutable.List([]),
  youtubePlayIdx: 0,
  isYoutubeAutoPlay: false,
}) {

}
