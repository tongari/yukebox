import Immutable from 'immutable';

export default class MyPlayListEdit extends Immutable.Record({
  isFetching: false,
  isDisplaySearchModal: false,
  searchKeyword: '',
  searchVideoItems: Immutable.List([]),
  myPlayList: Immutable.List([]),
}) {

}
