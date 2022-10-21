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

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const elIndex = newCounters.findIndex((c) => c.id === counterId);
    newCounters[elIndex].value += 1;
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const elIndex = newCounters.findIndex((c) => c.id === counterId);
    if (newCounters[elIndex].value > 0) newCounters[elIndex].value -= 1;
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(state);

  return (
    <div>
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          {...counter}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
