import React, { useState } from "react";
import SelectField from "../common/form/selectField";
import TextField from "../common/form/textField";
import colors from "../../constants/colors.json";

const EditForm = ({ data, onSubmit }) => {
  const [form, setForm] = useState(data || {});
  const handeleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };
  const handleChange = (target) => {
    setForm((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  return (
    <form onSubmit={handeleSubmit}>
      <TextField
        label="Наименование"
        name="name"
        onChange={handleChange}
        value={form.name || ""}
      />
      <SelectField
        label="Цвет"
        name="color"
        options={colors}
        onChange={handleChange}
        value={form.color || ""}
      />
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default EditForm;
