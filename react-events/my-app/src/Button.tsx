type Prop = {
  label: string;
  onLabelClick: () => void;
};
export function Button({ label, onLabelClick }: Prop) {
  return <button onClick={onLabelClick}>{label}</button>;
}
