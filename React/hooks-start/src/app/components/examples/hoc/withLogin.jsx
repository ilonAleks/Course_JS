import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Сomponent) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? <Сomponent {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};

export default withLogin;
