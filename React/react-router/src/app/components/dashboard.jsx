import { Route, Link } from "react-router-dom";
import Edit from "./edit.jsx";
import Stats from "./stats.jsx";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Route exact path="/dashboard" component={Stats} />
      <Route path="/dashboard/edit" component={Edit} />
    </div>
  );
};

export default Dashboard;
