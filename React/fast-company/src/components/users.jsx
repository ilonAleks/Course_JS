import React, { useState } from "react";
import User from "./user.jsx";
import Pagination from "./pagination.jsx";
import { paginate } from "../utils/paginate.js";
import PropTypes from "prop-types";
import GroupList from "./grouplist.jsx";

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const count = allUsers.length;
    const pageSize = 4;
    const handlePageChange = (pageIndex) => {
        console.log("pageIndex", pageIndex);
        setCurrentPage(currentPage);
    };
    const users = paginate(allUsers, currentPage, pageSize);
    return (
        <>
            <GroupList />
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default Users;
