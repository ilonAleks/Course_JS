import React from "react";
import CardWrapper from "../../common/Card";

const withPropStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} name="new Name" />
        </CardWrapper>
    );
};

export default withPropStyles;
