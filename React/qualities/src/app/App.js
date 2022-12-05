import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Container from "./components/common/container";
import NavBar from "./components/ui/NavBar";
import routes from "./routes";
import { QualitiesProvider } from "./hooks/useQualities";

const getRoutes = (routes) => {
  return routes.map((prop, key) => {
    return <Route path={prop.path} component={prop.component} key={key} />;
  });
};

function App() {
  return (
    <div className="App">
      <NavBar routes={routes} />
      <QualitiesProvider>
        <Container>
          <Switch>
            {getRoutes(routes)}
            <Redirect to="/" />
          </Switch>
        </Container>
      </QualitiesProvider>
    </div>
  );
}

export default App;
