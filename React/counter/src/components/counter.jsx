import React, { useState } from "react";

const Counter = (props) => {
  console.log(props);
  const [value, setValue] = useState(props.value);

  const tags = ["tag1", "tag2", "tag3"];

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  // const renderTags = () => {
  //   if (tags.length === 0) return "Теги не найдены";
  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // };

  const handleIncrement = (productId) => {
    console.log(productId);
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) setValue(value - 1);
  };

  return (
    <>
      {/* {renderTags()} */}
      <h5>{props.name}</h5>
      <span className={getClasses()}>{formValue()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm">
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
      <br></br>
    </>
  );
};

export default Counter;
