import './Image.css';
import { useState } from 'react';
type Props = {
  src: string[];
};
export function Image({ src }: Props) {
  const [index, setIndex] = useState(0);
  function click() {
    if (index === src.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return <img onClick={click} src={src[index]} />;
}
