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
      if (this.props.appStore.get('isDisplayYoutubePlayer')){
        this.youtubePlayer.props.onPlay();
      }
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
    if (this.props.appStore.get('isDisplayYoutubePlayer')) {
      const idx = this.props.appStore.get('youtubePlayIdx');
      const youtubePlayList = this.props.appStore.get('youtubePlayList');
      const videoId = youtubePlayList[idx].video_id;

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
            <div className="p-videoModal__trackList c-group -space-XXS">
              {
                youtubePlayList.map((item, idx) => {
                  return(
                    <button
                      className="u-block"
                      onClick={
                        () => {
                          this.props.appActions.changeYoutubePlayIdx(idx);
                        }
                      }
                    >
                      <div className="p-videoModal__trackListBody" key={`videoModal__trackList__${item.video_id}`}>
                        <img className="p-videoModal__trackListThumb" src={`https://i.ytimg.com/vi/${item.video_id}/default.jpg`} width={60} alt="" />
                        <p className="u-text-size-S u-inner-space-l-XS">{item.track_title}</p>
                      </div>
                    </button>

                  )
                })
              }
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
