import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const ProgrammablActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        // console.log(inputRef.current); //<input type="email" class="form-control">
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "150px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Focus for input
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Change width
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
