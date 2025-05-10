import './ToggleSwitch.css';

type Prop = {
  onToggleClick: () => void;
};

export function ToggleSwitch({ onToggleClick }: Prop) {
  return <button onClick={onToggleClick}></button>;
}
