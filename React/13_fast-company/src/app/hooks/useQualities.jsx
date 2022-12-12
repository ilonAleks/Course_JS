import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import qualityService from "../service/qualitiesService";
import { toast } from "react-toastify";

const QualitiesContext = React.createContext();

export const useQualities = () => {
    return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.get();
                setQualities(content);
                setIsLoading(false);
            } catch (error) {
                errorCatcher(error);
            }
        };
        getQualities();
    }, []);

    function getQuality(id) {
        return qualities.find((q) => q._id === id);
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    return (
        <QualitiesContext.Provider value={{ isLoading, qualities, getQuality }}>
            {children}
        </QualitiesContext.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};
