import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import UsersLoader from "../components/ui/hoc/usersLoader";
import UserProvider from "../hooks/useUsers";
import { getCurrentUserId } from "../store/users";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const currentUserId = useSelector(getCurrentUserId());

    return (
        <>
            <UsersLoader>
                <UserProvider>
                    {userId ? (
                        edit ? (
                            userId === currentUserId ? (
                                <EditUserPage />
                            ) : (
                                <Redirect to={`/users/${currentUserId}/edit`} />
                            )
                        ) : (
                            <UserPage userId={userId} />
                        )
                    ) : (
                        <UsersListPage />
                    )}
                </UserProvider>
            </UsersLoader>
        </>
    );
};

export default Users;
