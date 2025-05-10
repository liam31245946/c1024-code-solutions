import './App.css';
import { useState } from 'react';
import { Modal } from './Modal';
export default function App() {
  const [open, setOpen] = useState(false);
  function openDialog() {
    setOpen(true);
  }

  function cancelDialog() {
    setOpen(false);
  }

  function deleteDialog() {
    alert('something was deleted');
    cancelDialog();
  }

  return (
    <>
      <button onClick={openDialog}>Delete Me!</button>
      <Modal isOpen={open} onClose={cancelDialog}>
        <p>Do you want to delete this</p>
        <button onClick={cancelDialog}>Cancel</button>
        <button onClick={deleteDialog}>Delete</button>
      </Modal>
    </>
  );
}
