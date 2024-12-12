type Prop = {
  captions: string;
};
export function Caption({ captions }: Prop) {
  return <h3>{captions}</h3>;
}
