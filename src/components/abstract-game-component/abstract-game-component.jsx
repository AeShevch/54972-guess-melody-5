import React from "react";
import PropTypes from "prop-types";

export default class AbstractGameComponent extends React.PureComponent {
  constructor(props) {
    if (new.target === AbstractGameComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }

    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const selectedElementIndex = parseInt(evt.target.value.replace(`answer-`, ``), 10);
    const {type} = this.props.question;
    const newValue = evt.target.checked;

    this.setState((state) => {
      return {
        userAnswers: state.userAnswers.map((value, index) => {
          const defaultValue = type === `artist` ? false : value;
          return index === selectedElementIndex ? newValue : defaultValue;
        }),
      };
    });
  }

  _renderGame() {
    throw new Error(`Abstract method not implemented: _renderGame`);
  }

  render() {
    return (
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию"/>
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
        {this._renderGame()}
      </section>
    );
  }
}

AbstractGameComponent.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
  }),
};
