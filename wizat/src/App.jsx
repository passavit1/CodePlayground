import { useEffect } from "react";
import { useState } from "react";

function App() {
  const arr = ["name", "meww", "gunn", "mango", "moon", "hello", "world"];
  const [filter, setFilter] = useState(arr);

  function Fillter(x) {
    return setFilter(
      arr.filter((y) => y.toLowerCase().indexOf(x.toLowerCase()) !== -1)
    );
  }

  return (
    <div>
      <input type="text" onChange={(x) => Fillter(x.target.value)} />
      {filter.map((x) => (
        <div>{x}</div>
      ))}
    </div>
  );
}

export default App;
