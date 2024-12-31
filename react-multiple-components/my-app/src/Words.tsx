export type Prop = {
  item: string;
};

export function Words({ item }: Prop) {
  return <h3>{item}</h3>;
}
