import { useDebugValue } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const arr = ["bomb", "name", "gun", "omg", "meww", "moon"];
  const [filter, setFilter] = useState(arr);
  return (
    <div>
      <input
        type="text"
        onChange={(x) =>
          setFilter(() =>
            arr.filter(
              (y) =>
                y.toLowerCase().indexOf(x.target.value.toLowerCase()) !== -1
            )
          )
        }
      />
      {filter.map((x) => (
        <div>{x}</div>
      ))}
    </div>
  );
}
export default App;
