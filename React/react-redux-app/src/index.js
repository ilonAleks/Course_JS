import React from "react";
import ReactDOM from "react-dom/client";
import { compose, pipe } from "lodash/fp";

const App = () => {
  const x = 2;
  const double = (num) => num * 2;
  const square = (num) => num * num;
  const half = (num) => num / 2;

  const mathCompose = compose(half, square, double);
  const mathPipe = pipe(double, square, half);
  return (
    <>
      <h1>{half(square(double(x)))}</h1>
      <h1>{mathCompose(x)}</h1>
      <h1>{mathPipe(x)}</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
