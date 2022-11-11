import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };
    function getInputClasses() {
        return "form-check-input" + (error ? " is-invalid" : "");
    }
    return (
        <div className="form-check mb-4">
            <input
                className={getInputClasses()}
                type="checkbox"
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label className="form-check-label" htmlFor={name}>
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

CheckBoxField.propTypes = {
    value: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    error: PropTypes.string,
    // children: PropTypes.oneOfType([
    //     PropTypes.array(PropTypes.node),
    //     PropTypes.node
    // ])
    children: PropTypes.node
};

export default CheckBoxField;

// Uncaught Invariant Violation:
// Calling PropTypes validators directly is not supported by the `prop-types` package.
// Use `PropTypes.checkPropTypes()` to call them
