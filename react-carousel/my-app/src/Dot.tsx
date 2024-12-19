import { FaCircle } from 'react-icons/fa';

type Prop = {
  count: number;
  onDotClick: (index: number) => void;
};

export function Dot({ count, onDotClick }: Prop) {
  function renderButton() {
    const buttons = [];
    for (let i = 0; i < count; i++) {
      buttons.push(<FaCircle key={i} onClick={() => onDotClick(i)} />);
    }
    return buttons;
  }

  return <div>{renderButton()}</div>;
}
