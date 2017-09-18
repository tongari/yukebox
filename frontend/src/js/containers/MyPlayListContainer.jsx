import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myPlayListActions from './../actions/myPlayList';


/**
 * MyPlayListContainer
 */
class MyPlayListContainer extends React.Component {
  render() {
    // const { store, bActions } = this.props;
    return (
      <div>MyPlayListContainer</div>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({
  bActions: bindActionCreators(myPlayListActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyPlayListContainer);
