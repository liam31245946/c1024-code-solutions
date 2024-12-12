import { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function Foo() {
  return <FaCheck />;
}

export function foo1() {
  return <FaTimes />;
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
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {password.length === 0 ? (
        <p className="p-1 text-red-700">
          Password is required.
          <FaTimes color="red" />
        </p>
      ) : password.length < 8 ? (
        <p className="p-1 text-red-700">
          Your password is too short.
          <FaTimes color="red" />
        </p>
      ) : password.length > 8 ? (
        <p className="p-1 text-green-700">
          <FaCheck color="green" />
        </p>
      ) : null}
    </>
  );
}
