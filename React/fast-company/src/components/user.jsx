import React from "react";
import Bookmark from "./bookmark.jsx";
import Qualitie from "./qualitie.jsx";

const User = ({
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  bookmark,
  onToggleBookmark,
  _id,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((item) => (
          <Qualitie key={item._id} {...item} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
