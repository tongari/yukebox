import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as appActions from './../actions/app';
import Youtube from 'react-youtube';

class VideoModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.youtubeOpts = {
      width: '100%',
      height: '100%',
      playerVars: {
        autoplay: 1
      }
    };

    this.youtubePlayer = null;
    this.onYoutubeReady = this.onYoutubeReady.bind(this);
    this.onYoutubeEnd = this.onYoutubeEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.appStore.get('youtubePlayIdx') !== nextProps.appStore.get('youtubePlayIdx')) {
      this.youtubePlayer.props.onPlay();
    }
  }

  onYoutubeReady(e) {
    e.target.playVideo();
  }

  onYoutubeEnd() {
    if (this.props.appStore.get('isYoutubeAutoPlay')) {
      if (this.props.appStore.get('youtubePlayIdx') < this.props.appStore.get('youtubePlayList').length) {
        const idx = this.props.appStore.get('youtubePlayIdx') + 1;
        this.props.appActions.changeYoutubePlayIdx(idx);
      }
    }
  }

  render() {
    if (this.props.appStore.isDisplayYoutubePlayer){
      const idx = this.props.appStore.get('youtubePlayIdx');
      const videoId = this.props.appStore.get('youtubePlayList')[idx].video_id;

      return (
        <div className="p-videoModal">
          <div className="p-videoModal__body">
            <div className="p-videoModal__player">
              <Youtube
                videoId={videoId}
                opts={this.youtubeOpts}
                onReady={this.onYoutubeReady}
                onEnd={this.onYoutubeEnd}
                ref={
                  (item) => {
                    this.youtubePlayer = item;
                  }
                }
              />
            </div>
          </div>
          <button
            className="p-videoModal__closeModalButton"
            onClick={
              ()=>{
                this.props.appActions.hideYoutubePlayer();
              }
            }
          />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  appStore: state.app,
});
const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VideoModalContainer);
