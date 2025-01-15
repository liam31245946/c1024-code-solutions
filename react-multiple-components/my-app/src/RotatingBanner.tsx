import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { WordIndex } from './WordIndex';
import { useState } from 'react';
import { Words } from './Words';
type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Words item={items[index]} />
      <PrevButton
        onPrevClick={() => setIndex((index - 1 + items.length) % items.length)}
      />
      <WordIndex count={items.length} onSelect={setIndex} />
      <NextButton onNextClick={() => setIndex((index + 1) % items.length)} />
    </>
  );
}
