import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import userService from "../service/userService";
import { toast } from "react-toastify";
import localStorageService, { setTokens } from "../service/localStorageService";

const httpAuth = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/",
    params: {
        key: process.env.REACT_APP_FIREBASE_KEY
    }
});
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    async function logIn({ email, password }) {
        try {
            const { data } = await httpAuth.post(
                `accounts:signInWithPassword`,
                {
                    email,
                    password,
                    returnSecureToken: true
                }
            );
            setTokens(data);
            getUserData();
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            // console.log(code, message);
            if (code === 400) {
                switch (message) {
                    case "INVALID_PASSWORD":
                        throw new Error(
                            "EMAIL или пароль введены неверно. Повторите попытку"
                        );
                    default:
                        throw new Error(
                            "Слишком много попыток входа. Повторите попытку позже"
                        );
                }
                // if (message === "INVALID_PASSWORD") {
                //     throw new Error(
                //         "EMAIL или пароль введены неверно. Повторите попытку"
                //     );
                // }
                // if (
                //     message ===
                //     "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."
                // ) {
                //     throw new Error(
                //         "Слишком много попыток входа. Повторите попытку позже"
                //     );
                // }
            }
        }
    }
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async function singUp({ email, password, ...rest }) {
        try {
            const { data } = await httpAuth.post(`accounts:signUp`, {
                email,
                password,
                returnSecureToken: true
            });
            setTokens(data);
            await createUser({
                _id: data.localId,
                email,
                rate: randomInt(1, 5),
                completedMeetings: randomInt(0, 300),
                ...rest
            });
        } catch (error) {
            errorCatcher(error);
            const { code, message } = error.response.data.error;
            console.log(code, message);
            if (code === 400) {
                if (message === "EMAIL_EXISTS") {
                    const errorObject = {
                        email: "Пользователь с таким EMAIL уже существует"
                    };
                    throw errorObject;
                }
            }
        }
    }
    async function getUserData() {
        try {
            const { content } = await userService.getCurrentUser();
            setCurrentUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }
    useEffect(() => {
        if (localStorageService.getAccessToken()) {
            getUserData();
        }
    }, []);
    async function createUser(data) {
        try {
            const { content } = await userService.create(data);
            console.log(content);
            setCurrentUser(content);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <AuthContext.Provider value={{ singUp, logIn, currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AuthProvider;
