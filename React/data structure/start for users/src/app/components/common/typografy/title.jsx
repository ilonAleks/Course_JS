import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

const Title = ({ children }) => {
    return (
        <Typography variant="h3" style={{ fontWeight: 800, margin: "16px 0" }}>
            {children}
        </Typography>
    );
};
Title.propTypes = {
    children: PropTypes.node
};
export default Title;
