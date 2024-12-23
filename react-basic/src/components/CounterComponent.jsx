import React, { useState } from "react";

export const CounterComponent = () => {
  // const [currentValue, Updater] = useState(initialValue);
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return (
    <>
      <h2>{counter}</h2>
      <div className="d-flex">
        <button className="btn btn-primary me-2" onClick={increment}>
          Increment
        </button>
        <button className="btn btn-primary me-2" onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-primary me-2" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
};
