import './Image.css';

type Props = {
  srcs: string[];
  index: number;
};
export function Image({ srcs, index }: Props) {
  return <img src={srcs[index]} />;
}
