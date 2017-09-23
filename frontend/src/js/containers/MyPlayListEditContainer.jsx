import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myPlayListEditActions from './../actions/myPlayListEdit';

import MyListEditTool from '../components/MyListEditTool';
import MyPlayListEditCell from '../components/MyListEditCell';

/**
 * MyPlayListEditContainer
 */
class MyPlayListEditContainer extends React.Component {
  componentWillMount() {
    this.props.myPlayListEditActions.getSingleMyPlayList(this.props.match.params.id);
  }

  render() {
    const myPlayList = this.props.myPlayListEdit.get('myPlayList');
    const myPlayListEditActions = this.props.myPlayListEditActions;
    return (
      <div>
        <MyListEditTool />
        <MyPlayListEditCell
          myPlayList={myPlayList}
          deleteTrack={myPlayListEditActions.deleteTrack}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myPlayListEdit: state.myPlayListEdit,
});
const mapDispatchToProps = dispatch => ({
  myPlayListEditActions: bindActionCreators(myPlayListEditActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPlayListEditContainer);
