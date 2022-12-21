import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import commentService from "../service/commentService";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../store/users";

const CommentsContext = React.createContext();

export const useComments = () => {
    return useContext(CommentsContext);
};

export const CommentsProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const { userId } = useParams();
    const currentUserId = useSelector(getCurrentUserId());

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
            userId: currentUserId
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
            setComments(content);
        } catch (error) {
            errorCatcher(error);
        } finally {
            setIsLoading(false);
        }
    }

    async function removeComment(id) {
        try {
            const { content } = await commentService.removeComment(id);
            if (content === null) {
                setComments((prevState) =>
                    prevState.filter((c) => c._id !== id)
                );
            }
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <CommentsContext.Provider
            value={{ isLoading, comments, createComment, removeComment }}
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
