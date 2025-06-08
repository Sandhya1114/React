import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialvalue) {
  const [value, setValue] = useState(() => {
    
    const stored = localStorage.getItem(key);
  return stored || initialvalue;

  });

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    } else {
      localStorage.setItem(key, JSON.stringify(initialvalue));
      setValue(initialvalue);
    }
  }, [key, initialvalue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
