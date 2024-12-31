import { NextButton } from './NextButton';

type Props = {
  count: number;
  onSelect: (index: number) => void;
};
export function WordIndex({ count, onSelect }: Props) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<NextButton key={i} onNextClick={() => onSelect(i)} />);
  }
  return <div>{buttons}</div>;
}
