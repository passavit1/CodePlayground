import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const a = toggle ? "true" : "false";
    setCount(a);
  }, [toggle]);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>click</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
