import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";
import {ActionCreator} from "../../store/action";

const Game = (props) => {
  const {step, resetGame, onUserAnswer, questions} = props;
  const currentQuestion = questions[step];
  const gameProps = {
    question: currentQuestion,
    handleSubmit: onUserAnswer,
  };

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
            <div className="wrong"/>
            <div className="wrong"/>
            <div className="wrong"/>
          </div>
        </header>
        {
          currentQuestion.type === `artist`
            ? <QuestionArtistScreen {...gameProps}/>
            : <QuestionGenreScreen {...gameProps}/>
        }
      </section>
    );
  } else {
    resetGame();
    return <Redirect to="/"/>;
  }
};

const mapStateToProps = (state) => ({
  step: state.step,
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  },
});

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
