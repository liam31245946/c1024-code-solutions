import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import { useState } from 'react';
import './App.css';

const srcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const captions = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const descriptions = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];

export function App() {
  const [index, setIndex] = useState(0);
  function handleCaptionClick() {
    if (index >= captions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handleDescriptionClick() {
    if (index >= descriptions.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handleImageclick() {
    if (index >= srcs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function handleNextClick() {
    handleCaptionClick();
    handleDescriptionClick();
    handleImageclick();
  }
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={srcs[index]} />
      <Caption captions={captions[index]} />
      <Description texts={descriptions[index]} />
      <Button label="Click for Next Image" onLabelClick={handleNextClick} />
    </>
  );
}
