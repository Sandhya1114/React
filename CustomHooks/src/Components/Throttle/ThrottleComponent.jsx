import React, { useState } from "react";
import useThrottle from "./useThrottle";

export default function Throttle() {
  const [input, setInput] = useState("");
  const throttledInput = useThrottle(input, 1000); // 1 second delay

  return (
    <div>
      <h2>Typing (Throttle Demo)</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Real: {input}</p>
      <p>Throttled: {throttledInput}</p>
    </div>
  );
}
