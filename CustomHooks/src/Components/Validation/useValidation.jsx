import { useState, useEffect } from "react";

export default function useValidation(value, validateFn) {
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const validationResult = validateFn(value);

    if (validationResult === true) {
      setIsValid(true);
      setError("");
    } else {
      setIsValid(false);
      setError(validationResult);
    }
  }, [value, validateFn]);

  return { isValid, error };
}
