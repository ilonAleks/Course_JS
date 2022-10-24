import React, { useState } from "react";
import API from "./API";
import Users from "./components/users.jsx";

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());

    const handleDelete = (userId) =>
        setUsers(users.filter((user) => user._id !== userId));

    const handleToggleBookmark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
    };

    return (
        <div>
            <Users
                users={users}
                onDelete={handleDelete}
                onToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
}

export default App;
