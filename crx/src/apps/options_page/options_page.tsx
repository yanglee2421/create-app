// React Imports
import { useState } from "react";

// MUI Imports
import {} from "@mui/material";

export function OptionsPage() {
  const [count, setCount] = useState(0);
  return (
    <>
      hello
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </>
  );
}
