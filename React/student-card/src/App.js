import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Main from "./layouts/main.jsx";
import Card from "./layouts/card.jsx";

function App() {
  return (
    <div className="container my-3">
      <div className="row">
        <Switch>
          <Route path="/card" exact component={Card} />
          <Route path="/" exact component={Main} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
