import React, { useState, useEffect } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

import Pagination from "../../common/pagination.jsx";
import { paginate } from "../../../utils/paginate.js";
import GroupList from "../../common/groupList.jsx";
import API from "../../../API";
import SearchStatus from "../../ui/searchStatus.jsx";
import UsersTable from "../../ui/usersTable.jsx";

const UsersListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

    const pageSize = 8;

    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

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

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf, searchQuery]);

    function handleSearchQuery({ target }) {
        setSelectedProf(undefined);
        setSearchQuery(target.value);
    }
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handlePreviousPage = (pageIndex) => {
        if (pageIndex > 1) return setCurrentPage(pageIndex - 1);
    };

    const handleNextPage = (pageIndex, pageCount) => {
        if (pageIndex < pageCount) return setCurrentPage(pageIndex + 1);
    };

    const handleProfessionSelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedProf(item);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filtredUsers = searchQuery
            ? users.filter(
                  (user) =>
                      user.name
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase()) !== -1
              )
            : selectedProf
            ? users.filter(
                  (user) =>
                      JSON.stringify(user.profession) ===
                      JSON.stringify(selectedProf)
              )
            : users;

        const count = filtredUsers.length;
        const sortedUsers = _.orderBy(
            filtredUsers,
            [sortBy.path],
            [sortBy.order]
        );
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);

        const clearFilter = () => {
            setSelectedProf();
        };

        return (
            <div className="d-flex">
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    {professions && (
                        <>
                            <GroupList
                                selectedItem={selectedProf}
                                items={professions}
                                onItemSelect={handleProfessionSelect}
                            />
                            <button
                                className="btn btn-secondary mt-2"
                                onClick={clearFilter}
                            >
                                Clear
                            </button>
                        </>
                    )}
                </div>
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handleSearchQuery}
                            value={searchQuery}
                        />
                    </div>
                    {/* /[а-яА-Я]+/g; */}
                    {count > 0 && (
                        <UsersTable
                            users={usersCrop}
                            onSort={handleSort}
                            onDelete={handleDelete}
                            onToggleBookmark={handleToggleBookmark}
                            selectedSort={sortBy}
                        />
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            onPreviousPage={handlePreviousPage}
                            onNextPage={handleNextPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "Loading...";
};
UsersListPage.propTypes = {
    users: PropTypes.array,
    onDelete: PropTypes.func,
    onToggleBookmark: PropTypes.func
};

export default UsersListPage;
