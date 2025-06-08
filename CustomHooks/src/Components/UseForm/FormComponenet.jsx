
import useForm from './useForm';

export default function Form() {
  const { formVal, changeInput, submitForm, clearForm } = useForm(
    { name: '', email: '' },
    (data) => {
      console.log('Form sent with:', data);
    }
  );

  return (
    <form onSubmit={submitForm}>
      <input
        name="name"
        placeholder="Enter name"
        value={formVal.name}
        onChange={changeInput}
      />
      <br />
      <input
        name="email"
        placeholder="Enter email"
        value={formVal.email}
        onChange={changeInput}
      />
      <br />
      <button type="submit">Send</button>
      <button type="button" onClick={clearForm}>Reset</button>
    </form>
  );
}
