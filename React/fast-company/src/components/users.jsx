import React, { useState } from "react";
import API from "../API";

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const renderPhrase = (num) => {
    const lastNum = Number(num.toString().slice(-1));
    if (num > 4 && num < 15) return "человек тусанут";
    if (num === 1) return "человек тусанет";
    if (lastNum === 1) return "человек тусанут";
    return "человека тусанут";
  };

  return (
    <>
      <span
        className={"badge text-bg-" + (users.length > 0 ? "primary" : "danger")}
      >
        {users.length > 0
          ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
          : "Никто с тобой не тусанет"}
      </span>
      {users.length > 0 && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      className={"badge m-1 text-bg-" + item.color}
                      key={item._id}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
