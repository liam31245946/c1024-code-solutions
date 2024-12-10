type Prop = {
  text: string;
};

export function Description({ text }: Prop) {
  return <p>{text}</p>;
}
