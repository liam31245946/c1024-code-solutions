import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Items } from './Items';

type Prop = {
  list: string[];
};

export function SearchableList({ list }: Prop) {
  const [query, setQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(query)
  );

  return (
    <div>
      <SearchBar query={query} onSearch={handleSearch} />
      <Items items={filteredList} />
    </div>
  );
}
