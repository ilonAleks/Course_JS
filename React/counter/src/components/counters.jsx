import React, { useState } from "react";
import Counter from "./counter.jsx";

const Counters = () => {
  const state = [
    { value: 0, id: 1, name: "Монитор" },
    { value: 3, id: 2, name: "Клавиатура" },
    { value: 5, id: 3, name: "Мышь" },
    { value: 7, id: 4, name: "Принтер" },
    { value: 10, id: 5, name: "Наушники" },
  ];
  const [counters, setCounters] = useState(state);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleReset = () => setCounters(state);
  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Counters;
