import React, {Fragment, PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._audioRef = createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;
    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  render() {
    const {src, isPlaying, playButtonClickHandle} = this.props;
    const {isLoading} = this.state;

    return (
      <Fragment>
        <button
          onClick={playButtonClickHandle}
          disabled={isLoading}
          className={`track__button ${isPlaying ? `track__button--pause` : `track__button--play`}`}
          type="button"
        />
        <div className="track__status">
          <audio
            autoPlay={isPlaying}
            src={src}
            ref={this._audioRef}
            onCanPlayThrough={() => this.setState({isLoading: false})}
          />
        </div>
      </Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  playButtonClickHandle: PropTypes.func.isRequired,
};
