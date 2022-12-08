import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const arr = ["what", "is", "your", "name", "my", "name", "is"];

  const [count, setCount] = useState(0);
  const [switched, setSwitched] = useState(false);
  const AssignInterval = useRef("");

  function Switch() {
    setSwitched(switched === false ? true : false);
  }

  useEffect(() => {
    if (switched) {
      const powerOn = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      AssignInterval.current = powerOn;
    } else {
      clearInterval(AssignInterval.current);
    }
  }, [switched]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={Switch}>start</button>
      <button onClick={Switch}>stop</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default App;
