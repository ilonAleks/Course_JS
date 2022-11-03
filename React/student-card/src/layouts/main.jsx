import { values } from "lodash";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [dataMain, setdataMain] = useState({});
  const dataUser = "data";

  useEffect(() => {
    const storegeData = localStorage.getItem(dataUser);
    if (storegeData) {
      setdataMain(JSON.parse(storegeData));
    }
  }, []);

  const content = {
    firstName:{dataMain[firstName][value]},
    lastName:{dataMain[lastName]},
    //!
  }
  const isUser = Object.keys(dataMain).length;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 shadow p-4">
          <h1>Карточка студента</h1>
          {isUser ? <h5>{content}</h5> : <p>Нет данных</p>}
          <Link to="/card" className="btn btn-success w-20 mx-auto">
            {isUser ? "Редактировать" : "Добавить"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
