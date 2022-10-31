import React from "react";
import { useParams } from "react-router-dom";

import UserPage from "../components/userPage.jsx";
import UsersList from "../components/usersList.jsx";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;
