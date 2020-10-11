import React from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import QuestionArtistScreen from "../question-artist-screen/question-artist-screen";
import QuestionGenreScreen from "../question-genre-screen/question-genre-screen";

export default class Game extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      questionIndex: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
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
      return currentQuestion.type === `artist` ?
        <QuestionArtistScreen question={currentQuestion} handleSubmit={this.handleSubmit}/> :
        <QuestionGenreScreen question={currentQuestion} handleSubmit={this.handleSubmit}/>;
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
