import React, { useState } from "react";
import Counter from "./counter.jsx";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </div>
  );
};

export default Counters;
