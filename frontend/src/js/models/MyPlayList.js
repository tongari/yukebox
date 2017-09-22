import Immutable from 'immutable';

export default class MyPlayList extends Immutable.Record({
  isFetching: false,
  playListTitle: '',
  isEditTitle: false,
  editId: null,
  isDisplayTitleInput: false,
  myPlayList: Immutable.List([]),
}) {

}
