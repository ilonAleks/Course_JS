import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "../components/textField.jsx";
import validator from "../utils/validator.js";

const Card = () => {
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    year: "",
    portfolio: "",
  });
  const [isUser, setIsUser] = useState(false);
  const dataUser = "data";

  const validation = {
    firstName: {
      isRequired: { message: "Поле 'Имя' обязательно для заполнения" },
    },
    lastName: {
      isRequired: { message: "Поле 'Фамилия' обязательно для заполнения" },
    },
    year: {
      isRequired: { message: "Поле 'Год рождения' обязательно для заполнения" },
      isDate: { message: "Поле 'Год рождения' не корректно" },
    },
    portfolio: {
      isRequired: { message: "Поле 'Портфолио' обязательно для заполнения" },
      isUrl: { message: "Поле 'Портфолио' должно быть ссылкой" },
    },
  };

  useEffect(() => {
    const dataLocal = localStorage.getItem(dataUser);
    if (dataLocal) {
      setData(JSON.parse(dataLocal));
      setIsUser(true);
    }
  }, []);

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validation);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem(dataUser, JSON.stringify(data));
    alert("Обновлено!");
    history.push("/");
    console.log(data);
  };

  const isValid = Object.keys(errors.length) === 0;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10 offset-md-1 shadow p-4">
          <h1>{isUser ? "Редактировать" : "Создать"}</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextField
              label="Фамилия"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <TextField
              type="number"
              label="Год рождения"
              name="year"
              value={data.year}
              onChange={handleChange}
              error={errors.year}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            {isUser && (
              <Link to="/" className="btn btn-primary w-20 mx-auto">
                Назад
              </Link>
            )}
            <button
              type="submit"
              className="btn btn-success w-20 mx-auto"
              disabled={!isValid}
            >
              {isUser ? "Обновить" : "Создать"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
