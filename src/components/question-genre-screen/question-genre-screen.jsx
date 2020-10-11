import React from "react";
import PropTypes from "prop-types";
import AbstractGameComponent from "../abstract-game-component/abstract-game-component";

export default class QuestionGenreScreen extends AbstractGameComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: [false, false, false, false],
    };
  }

  _renderGame() {
    const {handleSubmit, question} = this.props;
    const {answers, genre} = question;
    const {userAnswers} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            handleSubmit(question, userAnswers);
          }}
        >
          {answers.map((answer, index) => (
            <div className="track" key={`answer-${index}`}>
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio src={answer.src}/>
              </div>
              <div className="game__answer">
                <input
                  onChange={this.handleChange}
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  checked={userAnswers[index]}
                  value={`answer-${index}`}
                  id={`answer-${index}`}
                />
                <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
              </div>
            </div>
          ))}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

QuestionGenreScreen.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      genre: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })),
    genre: PropTypes.string.isRequired,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
