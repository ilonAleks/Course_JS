import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import API from "../../../API";
import UserCard from "../../ui/userCard.jsx";
import QualitiesCard from "../../ui/qualitiesCard.jsx";
import MeetingsCard from "../../ui/meetingsCard.jsx";
import Comments from "../../ui/comments.jsx";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);
    if (user) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <UserCard user={user} />
                        <QualitiesCard data={user.qualities} />
                        <MeetingsCard value={user.completedMeetings} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
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
