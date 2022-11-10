import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField.jsx";
import validator from "../../utils/validator.js";
import API from "../../API";
import SelectField from "../common/form/selectField.jsx";
import RadioField from "../common/form/radioField.jsx";

const RegisterForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male"
    });
    const [errors, setErrors] = useState({});

    const [professions, setProfessions] = useState();

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };

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
        const { profession } = data;
        console.log({
            ...data,
            profession: getProfessionById(profession)
        });
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
            <RadioField
                value={data.sex}
                onChange={handleChange}
                options={[
                    { name: "male", value: "male" },
                    { name: "female", value: "female" },
                    { name: "other", value: "other" }
                ]}
                name="sex"
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
