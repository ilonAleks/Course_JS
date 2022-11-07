import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "../components/textField.jsx";
import validator from "../utils/validator.js";
import { FACTS, dataUser } from "../utils/constants.js";

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

  const isValid = Object.keys(errors).length === 0;

  return (
    <div className="col-md-6 offset-md-3">
      <h1>{isUser ? "Редактировать" : "Создать"}</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(data).map((type) => (
          <TextField
            key={type}
            label={FACTS[type].label}
            type={FACTS[type].type}
            name={type}
            value={data[type]}
            error={errors[type]}
            onChange={handleChange}
          />
        ))}

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
  );
};

export default Card;
