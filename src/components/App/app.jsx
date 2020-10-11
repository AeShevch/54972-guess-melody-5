import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import ResultScreen from "../result-screen/result-page-screen";
import GameOverScreen from "../game-over-screen/game-over-screen";
import Game from "../game/game";

const App = (props) => {
  const {questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <WelcomeScreen
            errorsCount={4}
          />
        </Route>
        <Route path="/game" exact>
          <Game questions={questions}/>
        </Route>
        <Route path="/sign-in" exact>
          <SignInScreen/>
        </Route>
        <Route path="/result" exact>
          <ResultScreen/>
        </Route>
        <Route path="/lose" exact>
          <GameOverScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default App;

