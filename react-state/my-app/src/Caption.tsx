import { useState } from 'react';

type Props = {
  caption: string[];
};
export function Caption({ caption }: Props) {
  const [index, setIndex] = useState(0);
  function click() {
    if (index === caption.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  return <h3 onClick={click}>{caption[index]}</h3>;
}
