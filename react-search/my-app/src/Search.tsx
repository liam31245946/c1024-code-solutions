import { useState } from 'react';

type Prop = {
  quotes: string[];
};
export function Search({ quotes }: Prop) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filtered, setFiltered] = useState(quotes);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const result = quotes.filter((item) => item.toLowerCase().includes(value));
    setFiltered(result);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInput}
      />
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
