import './styles.css';

type Props = {
  query: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ query, onSearch }: Props) {
  return (
    <div className="search-bar">
      <img src="search-solid.svg" alt="Search" />
      <input
        type="text"
        value={query}
        onChange={onSearch}
        placeholder="Search..."
      />
    </div>
  );
}
