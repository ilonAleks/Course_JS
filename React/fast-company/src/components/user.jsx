import React from "react";
import Bookmark from "./bookmark.jsx";
import Quality from "./quality.jsx";
import PropTypes from "prop-types";

const User = ({
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDelete,
    bookmark,
    onToggleBookmark,
    _id
}) => {
    return (
        <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((item) => (
                    <Quality key={item._id} {...item} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <Bookmark
                    status={bookmark}
                    onClick={() => onToggleBookmark(_id)}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};
User.propTypes = {
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool,
    onToggleBookmark: PropTypes.func.isRequired,
    _id: PropTypes.string.isRequired
};
export default User;