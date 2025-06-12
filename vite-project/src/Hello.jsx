import React, { useEffect, useState } from "react";

export default function Hello() {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const [dCount, setDCount] = useState(1);
  const doubleCount = () => {
    setDCount(dCount * 2);
  };



  useEffect(()=>{

console.log("Only single count is increasing")

  },[count])


  useEffect(()=>{

console.log("Multiple Count is increasing")


  },[dCount])

  return (
    <div>
      <h3>Counter App</h3>

      <h4>{count}</h4>
      <button onClick={increaseCount}>Increase count</button>

      <br />
      <br />

      <h4>{dCount}</h4>
      <button onClick={doubleCount}>Increase count</button>
    </div>
  );
}
