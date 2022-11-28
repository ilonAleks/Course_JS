import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
const SmallTitle = ({ children }) => {
    return (
        <Typography variant="h5" style={{ margin: "25px 0 10px" }}>
            {children}
        </Typography>
    );
};
SmallTitle.propTypes = {
    children: PropTypes.node
};
export default SmallTitle;
