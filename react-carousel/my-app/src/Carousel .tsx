import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Dot } from './Dot';
import { ImageCard } from './ImageCard';
import { useState, useEffect } from 'react';
import { Image } from './App';

type Prop = {
  images: Image[];
};

export function Carousel({ images }: Prop) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIndex((index + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [setIndex, index]);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const currentImage = (current: number) => {
    setIndex(current);
  };

  return (
    <>
      <div>
        <NextButton onClick={nextImage} />
        <ImageCard image={images[index]} />
        <PrevButton onClick={prevImage} />
      </div>
      <div>
        <Dot count={images.length} onDotClick={currentImage} />
      </div>
    </>
  );
}
