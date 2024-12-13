import { FormEvent, useState } from 'react';
// export function RegistrationFormUncontrolled() {
//   function handleSubmit(event: FormEvent<HTMLFormElement>): void {
//     event.preventDefault();
//     const form = event.currentTarget as HTMLFormElement;

//     const formData = new FormData(form);

//     const formValues = Object.fromEntries(formData);

//     const { username, password } = formValues;

//     console.log({ username, password });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" name="username" required />
//       </label>

//       <label>
//         Password:
//         <input type="password" name="password" required />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
