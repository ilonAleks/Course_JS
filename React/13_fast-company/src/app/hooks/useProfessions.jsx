import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import professionsService from "../service/professionsService";
import { toast } from "react-toastify";

const ProfessionsContext = React.createContext();

export const useProfessions = () => {
    return useContext(ProfessionsContext);
};

export const ProfessionsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [professions, setProfessions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getProfessionsList();
    }, []);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    function getProfessions(id) {
        return professions.find((p) => p._id === id);
    }

    async function getProfessionsList() {
        try {
            const { content } = await professionsService.get();
            setProfessions(content);
            setIsLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <ProfessionsContext.Provider
            value={{ isLoading, professions, getProfessions }}
        >
            {children}
        </ProfessionsContext.Provider>
    );
};

ProfessionsProvider.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};
