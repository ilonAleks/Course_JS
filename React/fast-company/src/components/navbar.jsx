import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ length }) => {
    const renderPhrase = (num) => {
        const lastNum = Number(num.toString().slice(-1));
        if (num > 4 && num < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastNum) >= 0) return "человека тусанут";
        if (lastNum === 1) return "человек тусанет";
        return "человек тусанет";
    };
    return (
        <h3>
            <span
                className={
                    "badge text-bg-" + (length > 0 ? "primary" : "danger")
                }
            >
                {length > 0
                    ? `${length} ${renderPhrase(length)} с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h3>
    );
};
Navbar.propTypes = {
    length: PropTypes.number
};

export default Navbar;
