import './App.css';
import './ToggleSwitch.css';
import { ToggleSwitch } from './ToggleSwitch';
import { useState } from 'react';

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn((prev) => !prev);

  const className = `toggle-switch${isOn ? ' is-on' : ''}`;

  return (
    <>
      <div className={className}>
        <div className="slider">
          <div className="switch">
            <ToggleSwitch onToggleClick={handleClick} />
          </div>
        </div>
        <span className="state-label">{isOn}</span>
      </div>
    </>
  );
}
