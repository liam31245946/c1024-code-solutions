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
  const [captionIndex, setCaptionIndex] = useState(0);
  function handleCaptionClick() {
    if (captionIndex >= captions.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  function handleDescriptionClick() {
    if (descriptionIndex >= descriptions.length - 1) {
      setDescriptionIndex(0);
    } else {
      setDescriptionIndex(descriptionIndex + 1);
    }
  }

  const [imageIndex, setImageIndex] = useState(0);
  function handleImageclick() {
    if (imageIndex >= srcs.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
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
      <Image srcs={srcs} index={imageIndex} />
      <Caption captions={captions} index={captionIndex} />
      <Description texts={descriptions} index={descriptionIndex} />
      <Button label="Click for Next Image" onLabelClick={handleNextClick} />
    </>
  );
}
