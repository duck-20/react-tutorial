import { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="counter">
        <h1>{count}</h1>
        <p>
          <button className="decrement" onClick={() => decrement()}>
            Decrement
          </button>
          <button className="reset" onClick={() => reset()}>
            Reset
          </button>
          <button className="increment" onClick={() => increment()}>
            Increment
          </button>
        </p>
      </div>
    </>
  );
}

export default Counter;
