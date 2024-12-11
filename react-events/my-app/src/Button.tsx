type Props = {
  label: string;
  onLabelClick: () => void;
};
export function Button({ label, onLabelClick }: Props) {
  return <button onClick={onLabelClick}>{label}</button>;
}
