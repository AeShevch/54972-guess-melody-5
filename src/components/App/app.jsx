import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "../welcome-page/welcome-page";
import SignIn from "../sign-in-page/sign-in-page";
import Result from "../result-page/result-page";
import GameOver from "../game-over-page/game-over-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Welcome
            errorsCount={4}
          />
        </Route>
        <Route path="/sign-in" exact>
          <SignIn/>
        </Route>
        <Route path="/result" exact>
          <Result/>
        </Route>
        <Route path="/lose" exact>
          <GameOver/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

