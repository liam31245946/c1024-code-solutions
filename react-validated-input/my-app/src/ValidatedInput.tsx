import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export function Foo() {
  return <FaCheck />;
}

type InputProps = {
  label: string;
};

export function Input({ label }: InputProps) {
  const [password, setPassword] = useState('');

  return (
    <>
      <label>
        {label}
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>

      {password.length === 0 ? (
        <p className="p-1 text-red-700">Password is required.</p>
      ) : password.length < 4 ? (
        <p className="p-1 text-red-700">Your password is too short.</p>
      ) : password.length > 4 ? (
        <p className="p-1 text-green-700">
          <FaCheck color="green" />
        </p>
      ) : null}
    </>
  );
}
