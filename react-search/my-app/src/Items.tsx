type ItemsProps = {
  items: string[];
};

export function Items({ items }: ItemsProps) {
  if (items.length === 0) {
    return <p>No items match your search.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '0.5rem' }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
