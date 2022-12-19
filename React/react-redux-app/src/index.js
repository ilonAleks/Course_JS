import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import * as actions from "./store/actionTypes";
import { createStore } from "./store/createStore";
import { taskReducer } from "./store/taskReducer";

const initialState = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false },
];

const store = createStore(taskReducer, initialState);

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => setState(store.getState()));
  }, []);

  const completeTask = (taskId) => {
    store.dispatch({
      type: actions.taskUpdated,
      payload: { id: taskId, completed: true },
    });
  };

  const changeTitle = (taskId) => {
    store.dispatch({
      type: actions.taskUpdated,
      payload: { id: taskId, title: `New title for ${taskId}` },
    });
  };

  return (
    <>
      <h1>App</h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => completeTask(el.id)}>Complete</button>
            <button onClick={() => changeTitle(el.id)}>Change Title</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
