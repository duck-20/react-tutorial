import { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const update = () => {
    setName("Duck");
    setAge(21);
    setIsEmployed(true);
  };
  const increment = () => {
    setAge(age + 1);
  };
  const decrement = () => {
    setAge(age - 1);
  };
  const toggle = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name:{name}</p>
        <p>
          Age:{age}
          <button onClick={() => decrement()}>-</button>
          <button onClick={() => increment()}>+</button>
        </p>
        <p>
          Is Employeed: {isEmployed ? "True" : "False"}
          <button onClick={() => toggle()}>Toggle Status</button>
        </p>
        <button onClick={() => update()}>Update</button>
      </div>
    </>
  );
}
export default MyComponent;
