import { useState } from "react";

function Home() {
  // Counter state
  const [number, setNumber] = useState(0);

  const increaseMyValue = () => {
    setNumber(number + 1);
  };
  function decreaseMyValue() {
    setNumber(number - 1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increaseMyValue}>+</button>
      <button onClick={decreaseMyValue}>-</button>
    </div>
  );
}
// in return statement, for single html tag, we can use <></> instead of <div></div>
export default Home;
// when using hooks in react we always use with useState, useEffect, useContext etc
// (always use 'use' in the beginning)
