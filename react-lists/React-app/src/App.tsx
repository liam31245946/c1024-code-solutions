import './App.css';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

export default function App() {
  const listItems = pokedex.map((pokemon) => <li>{pokemon.name}</li>);

  return <ul>{listItems}</ul>;
}
