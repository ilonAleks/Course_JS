import React from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
  function getInputClasses() {
    return "form-control w-100" + (error ? " is-invalid" : "");
  }
  return (
    <div className="mb-4 ">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};

export default TextField;
