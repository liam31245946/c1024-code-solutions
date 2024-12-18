import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Dot } from './Dot';
import { ImageCard } from './ImageCard';
import { useState, useEffect } from 'react';

export type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  {
    src: '/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

export function Carousel() {
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
