import React, { useState } from "react";
import Child from "./Child";

export default function State() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div style={{ color: color }}>123</div>
      <button onClick={() => setColor("blue")}>click</button>
      <Child test={color} change={() => setColor("blue")} />
    </>
  );
}
