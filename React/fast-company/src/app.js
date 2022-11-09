import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/ui/navbar.jsx";
import Users from "./layouts/users.jsx";
import Main from "./layouts/main.jsx";
import Login from "./layouts/login.jsx";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
