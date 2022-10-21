import React from "react";

const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  // const tags = ["tag1", "tag2", "tag3"];

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

  return (
    <>
      {/* {renderTags()} */}
      <h5>{name}</h5>
      <span className={getClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm m-1"
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm m-1"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
      <br></br>
    </>
  );
};

export default Counter;
