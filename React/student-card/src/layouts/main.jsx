import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FACTS, dataUser } from "../utils/constants.js";
import { calculateAge, plural } from "../utils/validator.js";

const Main = () => {
  const [dataMain, setDataMain] = useState({});

  useEffect(() => {
    const storegeData = localStorage.getItem(dataUser);
    if (storegeData) {
      setDataMain(JSON.parse(storegeData));
    }
  }, []);

  const renderContent = (type, value) => {
    return content[type] || value;
  };

  const content = {
    year: (
      <>
        {dataMain.year} ({calculateAge(dataMain.year)}
        {plural(calculateAge(dataMain.year))})
      </>
    ),
    portfolio: (
      <a
        href={dataMain.portfolio}
        target="_blank"
        className="link-primary"
        rel="noreferrer"
      >
        {dataMain.portfolio}
      </a>
    ),
  };

  const isUser = Object.keys(dataMain).length;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 shadow p-4">
          <h1>Карточка студента</h1>
          {isUser ? (
            Object.keys(dataMain).map((type) => (
              <div key={type}>
                <small>
                  <b> {FACTS[type].label}</b>
                </small>
                : {renderContent(type, dataMain[type])}
              </div>
            ))
          ) : (
            <div>Нет данных</div>
          )}
          <Link to="/card" className="btn btn-success w-20 mx-auto mt-4">
            {isUser ? "Редактировать" : "Добавить"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
