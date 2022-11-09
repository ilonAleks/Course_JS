import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../../API";
import PropTypes from "prop-types";

import Qualities from "../../ui/qualities";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    });
    const toUsers = () => {
        history.push("/users");
    };
    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h3>Профессия: {user.profession.name}</h3>
                <Qualities qualities={user.qualities} />
                <p>Встретился, раз: {user.completedMeetings}</p>
                <h3>Оценка: {user.rate}</h3>
                <button onClick={toUsers}>Все пользователи</button>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};
UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
