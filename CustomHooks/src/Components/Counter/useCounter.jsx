// useCounter.js
import { useState } from 'react';

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count => count + 1);
  const decrement = () => setCount(count => count==0?count:count-1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
