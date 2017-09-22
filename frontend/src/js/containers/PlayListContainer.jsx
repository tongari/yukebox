import React from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playListActions from './../actions/playList';


const style = () => (
  {
    listStyleType: 'none',
    minHeight: '20px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e3e3e3',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.05)',
    whiteSpace: 'nowrap',
  }
);

/**
 * PlayListContainer
 */
class PlayListContainer extends React.Component {
  componentWillMount() {
    this.props.playListActions.fetchPlayList();
  }

  render() {
    // const { store, bActions } = this.props;
    return (
      <div>
        <ul>
          <li style={style()}>
            <p>アルバム</p>
            <img src="https://i.ytimg.com/vi/43D_nBGfuGY/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/2MNL2mU8pBE/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/AfjteCMzYUo/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/7aJmUeLMZi4/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/oGLKmSpgzXA/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/qA6a7hrpoRg/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/gj5Nu6feFTQ/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/_B09-nM3knE/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/JHlX4MtHSeU/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/QqqlBerbOhE/default.jpg" alt="" />
          </li>
          <li style={style()}>
            <p>アルバム</p>
            <img src="https://i.ytimg.com/vi/43D_nBGfuGY/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/2MNL2mU8pBE/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/AfjteCMzYUo/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/7aJmUeLMZi4/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/oGLKmSpgzXA/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/qA6a7hrpoRg/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/gj5Nu6feFTQ/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/_B09-nM3knE/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/JHlX4MtHSeU/default.jpg" alt="" />
            <img src="https://i.ytimg.com/vi/QqqlBerbOhE/default.jpg" alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});
const mapDispatchToProps = dispatch => ({
  playListActions: bindActionCreators(playListActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayListContainer);
