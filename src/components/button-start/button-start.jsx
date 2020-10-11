import React from "react";
import {withRouter} from "react-router-dom";

const ButtonStart = withRouter(({history}) => (
  <button
    type="button"
    className="welcome__button"
    onClick={() => {
      history.push(`/game`);
    }}
  >
    <span className="visually-hidden">Начать игру</span>
  </button>
));

export default ButtonStart;
