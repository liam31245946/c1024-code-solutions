import { Image } from './Carousel ';

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
