import Immutable from 'immutable';

export default class MyPlayList extends Immutable.Record({
  isFetching: false,
  playListTitle: '',
  isEditTitle: false,
  editId: null,
  isDisplayTitleInput: false,
  isDisplayAddTrack: false,
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
