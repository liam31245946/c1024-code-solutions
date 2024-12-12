import { Input } from './ValidatedInput';
import './App.css';
import { FaCheck } from 'react-icons/fa';

export function Foo() {
  return <FaCheck />;
}

export default function App() {
  return (
    <>
      <Input label="Password:" />
    </>
  );
}
