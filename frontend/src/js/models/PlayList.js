import Immutable from 'immutable';

export default class PlayList extends Immutable.Record({
  isFetching: false,
  playListData: Immutable.Map({}),
}) {

}
