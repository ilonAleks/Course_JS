import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import { ProfessionsProvider } from "./hooks/useProfessions";
import { QualitiesProvider } from "./hooks/useQualities";
import AuthProvider from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import { useDispatch } from "react-redux";
import { loadQualitiesList } from "./store/qualities";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadQualitiesList());
    }, []);

    return (
        <div>
            <AuthProvider>
                <NavBar />

                <QualitiesProvider>
                    <ProfessionsProvider>
                        <Switch>
                            <ProtectedRoute
                                path="/users/:userId?/:edit?"
                                component={Users}
                            />
                            <Route path="/login/:type?" component={Login} />
                            <Route path="/logout" component={LogOut} />
                            <Route path="/" exact component={Main} />
                            <Redirect to="/" />
                        </Switch>
                    </ProfessionsProvider>
                </QualitiesProvider>
            </AuthProvider>

            <ToastContainer />
        </div>
    );
}

export default App;
