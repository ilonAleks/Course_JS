import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality.jsx";

const Qualities = ({ qualities }) => {
    return (
        <>
            {qualities.map((item) => (
                <Quality key={item._id} {...item} />
            ))}
        </>
    );
};
Qualities.propTypes = {
    qualities: PropTypes.array
};
export default Qualities;
