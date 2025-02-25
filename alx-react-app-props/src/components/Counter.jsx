import { useState } from "react";

function Counter() {
  // State to keep track of the count
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter Application</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "10px" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "10px" }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
