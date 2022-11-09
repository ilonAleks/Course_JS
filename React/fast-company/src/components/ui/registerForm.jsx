import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField.jsx";
import validator from "../../utils/validator.js";
import API from "../../API";
import SelectField from "../common/form/selectField.jsx";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: ""
    });
    const [errors, setErrors] = useState({});

    const [professions, setProfessions] = useState();
    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: { message: "Email is requires to fill" },
            isEmail: { message: "Email not correctly" }
        },
        password: {
            isRequired: { message: "Password is requires to fill" },
            isCapitalSymbol: {
                message: "Password must have at least one capital letter"
            },
            isConteinDigit: {
                message: "Password must have at least one digit"
            },
            minLength: {
                message: "Password must be longer than 8 symbols",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "Necessarily choose your profession"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Choose your profession"
                value={data.profession}
                onChange={handleChange}
                defaultOption="Choose..."
                options={professions}
                error={errors.profession}
                name="profession"
            />
            <button
                disabled={!isValid}
                className="btn btn-success w-100 mx-auto"
            >
                Submit
            </button>
        </form>
    );
};

export default RegisterForm;
