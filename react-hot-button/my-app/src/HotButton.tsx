import './HotButton.css';

type Prop = {
  text: string;
  onButtonClick: () => void;
  className: string;
};

export function HotButton({ text, onButtonClick, className }: Prop) {
  return (
    <>
      <button className={className} onClick={onButtonClick}>
        {text}
      </button>
    </>
  );
}
