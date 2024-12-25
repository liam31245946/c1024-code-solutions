import { useState } from 'react';
import { HotButton } from './HotButton';
import './App.css';
import './HotButton.css';

export default function App() {
  const [index, setIndex] = useState(0);

  const handleClick = () => setIndex(index + 1);

  let colorClass: string;

  if (index >= 15) {
    colorClass = 'white';
  } else if (index >= 12) {
    colorClass = 'yellow';
  } else if (index >= 9) {
    colorClass = 'orange';
  } else if (index >= 6) {
    colorClass = 'lightred';
  } else if (index >= 3) {
    colorClass = 'darkblue';
  } else {
    colorClass = 'blue';
  }

  return (
    <>
      <HotButton
        onButtonClick={handleClick}
        text="Hot Button"
        className={colorClass}
      />
    </>
  );
}
