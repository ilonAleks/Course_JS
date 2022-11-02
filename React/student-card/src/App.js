import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Main from "./layouts/main.jsx";
import Card from "./layouts/card.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/card" component={Card} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
