import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Welcome from "../../pages/welcome/welcome";
import SignIn from "../../pages/sign-In/sign-In";
import Result from "../../pages/result/result";
import GameOver from "../../pages/game-over/game-over";

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

