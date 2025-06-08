import React, { useState } from "react";
import useValidation from "./useValidation";

function validateEmail(email) {
  return email.includes("@") ? true : "Invalid email: must contain '@'";
}

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const { isValid, error } = useValidation(email, validateEmail);

  return (
    <div>
      <h2>Email Validator</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter email"
      />
      {!isValid && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
