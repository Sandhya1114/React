'use client'; // Required for client components

import { useActionState } from 'react';

// This is a client component that uses useActionState
export default function Form() {
  // Form action handler
  const handleSubmit = async (prevState, formData) => {
    const name = formData.get("name");
    const password = formData.get("password");

    await new Promise(res => setTimeout(res, 1000)); // simulate API delay

    if (name && password) {
      return { name, password, message: "Data submitted!" };
    } else {
      return { error: "Please enter both name and password." };
    }
  };

  // useActionState hook to manage form state
  const [data, formAction, isPending] = useActionState(handleSubmit, {
    name: "",
    password: "",
    message: "",
    error: ""
  });

  return (
    <>
      <form action={formAction}>
        <br /><br />
        <input
          type="text"
          name="name"
          defaultValue={data.name}
          placeholder="Enter name"
        />
        <br /><br />
        <input
          type="password"
          name="password"
          defaultValue={data.password}
          placeholder="Enter password"
        />
        <br /><br />
        <button disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>

      {data.error && <p style={{ color: "red" }}>{data.error}</p>}
      {data.message && <p style={{ color: "green" }}>{data.message}</p>}
      <h3>Name: {data.name}</h3>
      <h3>password: {data.password}</h3>
    </>
  );
}
