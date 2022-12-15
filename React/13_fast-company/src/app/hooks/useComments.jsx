import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useAuth } from "./useAuth";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import commentService from "../service/commentService";

const CommentsContext = React.createContext();

export const useComments = () => {
    return useContext(CommentsContext);
};

export const CommentsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const { userId } = useParams();
    const { currentUser } = useAuth();

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getComments();
    }, [userId]);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }

    async function createComment(data) {
        const comment = {
            ...data,
            _id: nanoid(),
            pageId: userId,
            created_at: Date.now(),
            userId: currentUser._id
        };
        try {
            const { content } = await commentService.createComment(comment);
            setComments((prevState) => [...prevState, content]);
        } catch (error) {
            errorCatcher(error);
        }
    }

    async function getComments() {
        try {
            const { content } = await commentService.getComments(userId);
            console.log(content);
            setComments(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <CommentsContext.Provider
            value={{ isLoading, comments, createComment }}
        >
            {children}
        </CommentsContext.Provider>
    );
};
CommentsProvider.propTypes = {
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};
