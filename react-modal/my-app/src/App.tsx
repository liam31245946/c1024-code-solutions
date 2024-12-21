import './App.css';
import { useRef } from 'react';

export default function App() {
  const modal = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modal.showModal();
  };
  const closeModal = () => {
    modal.close();
  };
  const deleteModal = () => {
    closeModal();
  };
  return (
    <>
      <button onClick={openModal}>Delete Me</button>
      <dialog ref={modal}>
        <p>do you want to delete this</p>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={deleteModal}>Delete</button>
      </dialog>
    </>
  );
}
