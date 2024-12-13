type Prop = {
  texts: string;
};
export function Description({ texts }: Prop) {
  return <p>{texts}</p>;
}
