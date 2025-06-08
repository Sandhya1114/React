import { useState, useEffect } from "react";

export default function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setThrottledValue(value);
    }, delay);

    // Cleanup if value changes too fast
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return throttledValue;
}
