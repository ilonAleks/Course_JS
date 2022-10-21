import React from "react";

const Qualitie = ({ color, name }) => {
  return <span className={"badge m-1 text-bg-" + color}>{name}</span>;
};

export default Qualitie;
