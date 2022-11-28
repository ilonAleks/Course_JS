import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const Subtitle = ({ children }) => {
    return (
        <Typography
            variant="h4"
            style={{ fontWeight: 700, margin: "40px 0 10px" }}
        >
            {children}
        </Typography>
    );
};
Subtitle.propTypes = {
    children: PropTypes.node
};
export default Subtitle;
