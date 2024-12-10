type Prop = {
  text: string;
};

export function Caption({ text }: Prop) {
  return <h3>{text}</h3>;
}
