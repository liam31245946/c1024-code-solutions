import './App.css';
import { Popup } from './Popup';
import { useState, useRef } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleMenu}>Pop up!</button>
      <p>This is a random paragraph</p>
      <Popup
        isOpen={menuOpen}
        positionTo={buttonRef.current}
        onClose={() => setMenuOpen(false)}>
        <div className="menu-wrapper">
          <ul className="popup-menu">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
          </ul>
        </div>
      </Popup>
      <p>This is a random paragraph but it just under Popup</p>
    </>
  );
}
