import NavBar from "./components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard.jsx";
import Login from "./components/login.jsx";
import Posts from "./components/posts.jsx";
import Home from "./components/home.jsx";
import Stats from "./components/stats.jsx";
import NotFound from "./components/notFound.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route
          path="/dashboard"
          component={Dashboard}
          // render={(props) => <Dashboard isAdmin={false} {...props} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/admin" to="/dashboard" />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
