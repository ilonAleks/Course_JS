import React, { useProfessions } from "../../hooks/useProfessions";
import PropTypes from "prop-types";

const Profession = ({ id }) => {
    const { isLoading, getProfessions } = useProfessions();

    if (!isLoading) {
        const prof = getProfessions(id);
        return <p>{prof.name}</p>;
    } else return "Loading...";
};

Profession.propTypes = {
    id: PropTypes.string
};

export default Profession;
