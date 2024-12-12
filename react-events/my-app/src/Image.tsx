import './Image.css';

type Prop = {
  src: string;
};
export function Image({ src }: Prop) {
  return <img src={src} />;
}
