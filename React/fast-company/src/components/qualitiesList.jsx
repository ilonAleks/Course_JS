import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality.jsx";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((item) => (
                <Quality key={item._id} {...item} />
            ))}
        </>
    );
};
QualitiesList.propTypes = {
    qualities: PropTypes.array
};
export default QualitiesList;
