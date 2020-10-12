import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";

export default class Game extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      questionIndex: 0,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    this.setState((state) => {
      return {
        questionIndex: state.questionIndex + 1,
      };
    });
  }

  render() {
    const {questions} = this.props;
    const {questionIndex} = this.state;
    const currentQuestion = questions[questionIndex];

    if (currentQuestion) {
      return (
        <section className="game game--artist">
          <header className="game__header">
            <a className="game__back" href="#">
              <span className="visually-hidden">Сыграть ещё раз</span>
              <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
              <circle className="timer__line" cx="390" cy="390" r="370" style={{
                filter: `url(#blur)`,
                transform: `rotate(-90 deg) scaleY(-1)`,
                transformOrigin: `center`,
              }}/>
            </svg>

            <div className="game__mistakes">
              <div className="wrong"></div>
              <div className="wrong"></div>
              <div className="wrong"></div>
            </div>
          </header>
          {
            currentQuestion.type === `artist`
              ? <QuestionArtistScreen question={currentQuestion} handleSubmit={this._handleSubmit}/>
              : <QuestionGenreScreen question={currentQuestion} handleSubmit={this._handleSubmit}/>
          }
        </section>
      );
    } else {
      return <Redirect to="/"/>;
    }
  }
}

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
  })),
};
