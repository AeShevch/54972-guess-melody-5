import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import withAnswerChangeHandle from "../../hocs/with-answer-change-handle";

class QuestionArtistScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: [false, false, false],
    };
  }

  render() {
    const {handleSubmit, handleChange, question} = this.props;
    const {song, answers} = question;
    const {userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={song.src}/>
            </div>
          </div>
        </div>

        <form
          className="game__artist"
          onChange={() => handleSubmit(question, userAnswers)}
        >
          {answers.map((answer, index) => (
            <div className="artist" key={`answer-${index}`}>
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                checked={userAnswers[index]}
                onChange={handleChange}
                value={`answer-${index}`}
                id={`answer-${index}`}
              />
              <label className="artist__name" htmlFor={`answer-${index}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    );
  }
}

QuestionArtistScreen.propTypes = {
  question: PropTypes.shape({
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withAnswerChangeHandle(QuestionArtistScreen);
