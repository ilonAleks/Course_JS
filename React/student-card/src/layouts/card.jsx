import React, { useState, useEffect } from "react";
import TextField from "../components/textField.jsx";
import validator from "../utils/validator.js";

const Card = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    dateBirthday: "",
    portfolio: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const validation = {
    firstName: {
      isRequired: { message: "Поле 'Имя' обязательно для заполнения" },
    },
    lastName: {
      isRequired: { message: "Поле 'Фамилия' обязательно для заполнения" },
    },
    dateBirthday: {
      isRequired: { message: "Поле 'Год рождения' обязательно для заполнения" },
      isDate: { message: "Поле 'Год рождения' не корректно" },
    },
    portfolio: {
      isRequired: { message: "Поле 'Портфолио' обязательно для заполнения" },
      isUrl: { message: "Поле 'Портфолио' должно быть ссылкой" },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validation);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-10 offset-md-1 shadow p-4">
          <h1>Создать</h1>
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
              name="dateBirthday"
              value={data.dateBirthday}
              onChange={handleChange}
              error={errors.dateBirthday}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            <button className="btn btn-success w-20 mx-auto">Создать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
// label, type, name, value, onChange
