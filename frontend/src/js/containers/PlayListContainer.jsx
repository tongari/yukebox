import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playListActions from './../actions/playList';


/**
 * PlayListContainer
 */
class PlayListContainer extends React.Component {
  render() {
    // const { store, bActions } = this.props;
    return (
      <div>PlayListContainer</div>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({
  bActions: bindActionCreators(playListActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayListContainer);
