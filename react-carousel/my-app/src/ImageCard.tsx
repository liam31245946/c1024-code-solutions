import { Image } from './App';

type Props = {
  image: Image;
};

export function ImageCard({ image }: Props) {
  return (
    <>
      <div className="image-card">
        <img src={image.src} alt={image.alt} />
      </div>
    </>
  );
}
