import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

const src = ['./starry-sky.jpeg', './car.jpg', './castle.jpg'];
const caption = ['A Beautiful Image of Space', 'A Cool car', 'Disney Castle'];
const description = [
  'Cool Space Image',
  'Racing car on freeway 405',
  ' A Place where children are happy and adult goes broke',
];

export default function App() {
  return (
    <>
      <Header text="React Image Bank" />
      <Image src={src} />
      <Caption caption={caption} />
      <Description text={description} />
      <Button label="Click for Next Image" />
    </>
  );
}
