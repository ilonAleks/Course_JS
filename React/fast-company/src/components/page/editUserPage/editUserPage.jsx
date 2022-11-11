import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import validator from "../../../utils/validator";
import API from "../../../API";
import TextField from "../../common/form/textField.jsx";
import SelectField from "../../common/form/selectField.jsx";
import RadioField from "../../common/form/radioField.jsx";
import MultiSelectField from "../../common/form/multiSelectField.jsx";

const EditUserPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
        profession: "",
        sex: "male",
        qualities: []
    });
    const [errors, setErrors] = useState({});
    const [qualities, setQualities] = useState({});
    const [professions, setProfessions] = useState({});

    const getProfessionById = (id) => {
        for (const prof of professions) {
            const profData = professions[prof];
            if (profData._id === id) return profData;
        }
    };

    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const el of elements) {
            for (const qualy in qualities) {
                if (el.value === qualities[qualy]._id) {
                    qualitiesArray.push(qualities[qualy]);
                }
            }
        }
        return qualitiesArray;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        API.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities)
            })
            .then((data) => history.push(`/users/${data._id}`));
        console.log(data);
    };

    const transformData = (data) => {
        return data.map((qual) => ({ label: qual.name, value: qual._id }));
    };

    useEffect(() => {
        setIsLoading(true);
        API.users.getById(userId).then(({ profession, ...data }) =>
            setData((prevState) => ({
                ...prevState,
                ...data,
                qualities: transformData(qualities),
                profession: profession._id
            }))
        );
        API.professions.fetchAll().then((data) => setProfessions(data));
        API.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: { message: "Email is requires to fill" },
            isEmail: { message: "Email not correctly" }
        },
        name: {
            isRequired: {
                message: "Enter your name"
            }
        }
    };
    useEffect(() => validate(), [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(professions).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
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
                                label="Choose your sex"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                name="qualities"
                                defaulValue={data.qualities}
                                label="Choose your qualities"
                            />
                            <button
                                disabled={!isValid}
                                className="btn btn-success w-100 mx-auto"
                            >
                                Update
                            </button>
                        </form>
                    ) : (
                        "Loading........"
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
