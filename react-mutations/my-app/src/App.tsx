/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useState } from 'react';
import { Pokemon, PokemonList } from './PokemonList';

export function App() {
  const [pokedex, setPokedex] = useState([
    { number: '001', name: 'Bulbasaur' },
    { number: '004', name: 'Charmander' },
    { number: '007', name: 'Squirtle' },
    { number: '025', name: 'Pikachu' },
    { number: '039', name: 'Jigglypuff' },
  ]);

  function handleAdd(poke: Pokemon): void {
    const newPoke = [...pokedex, poke];
    setPokedex(newPoke);
  }

  function handleUpdate(poke: Pokemon): void {
    const newPoke = pokedex.map((p) => (p.number === poke.number ? poke : p));
    setPokedex(newPoke);
  }
  function handleRemove(poke: Pokemon): void {
    const newPoke = pokedex.filter((p) => p.number !== poke.number);
    setPokedex(newPoke);
  }
  return (
    <div>
      <PokemonList pokedex={pokedex} />
      <button onClick={() => handleAdd({ number: '500', name: 'lugia' })}>
        Add
      </button>
      <button onClick={() => handleUpdate({ number: '500', name: 'Mew' })}>
        Update
      </button>
      <button onClick={() => handleRemove({ number: '500', name: 'lugia' })}>
        Remove
      </button>
    </div>
  );
}
