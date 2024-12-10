type Prop = {
  text: string;
};
export function Button({ text }: Prop) {
  return <button>{text}</button>;
}
