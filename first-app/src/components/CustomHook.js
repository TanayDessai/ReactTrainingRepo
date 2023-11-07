import React from "react";
import useCounter from "./useCounter";

export const CustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>Count :- {count} </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
