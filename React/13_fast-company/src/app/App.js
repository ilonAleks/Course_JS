import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import { ProfessionsProvider } from "./hooks/useProfessions";
import { QualitiesProvider } from "./hooks/useQualities";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <QualitiesProvider>
                    <ProfessionsProvider>
                        <Route
                            path="/users/:userId?/:edit?"
                            component={Users}
                        />
                        <Route path="/login/:type?" component={Login} />
                    </ProfessionsProvider>
                </QualitiesProvider>
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </div>
    );
}

export default App;
