import Immutable from 'immutable';

export default class MyPlayListEdit extends Immutable.Record({
  isFetching: false,
  isDisplaySearchModal: false,
  searchKeyword: '',
  searchVideoItems: Immutable.List([]),
  myPlayList: Immutable.List([]),
  addTracks: Immutable.List([
    {
      videoId: 'YapsFDcGe_s',
      title: 'スピッツ楓',
    },
    {
      videoId: '51CH3dPaWXc',
      title: 'スピッツ / ロビンソン',
    },
  ]),
  editTracks: Immutable.List([
    {
      id: 16,
      trackNum: 3,
    },
    {
      id: 17,
      trackNum: 2,
    },
  ]),
}) {

}
