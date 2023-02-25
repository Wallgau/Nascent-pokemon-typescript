import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { getPokemons, getPokemon } from 'service/pokemon';
import Pagination from '../../components/pagination';

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [favoritePokemons, setFavoritePokemons] = useState<any[]>([]);
  const [userSearch, setUserSearch] = useState('');
  const getAllPokemons = async () => {
    const data = await getPokemons();
    setPokemonList(data);
  };
  const pokemonSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const pokemonChoosed = await getPokemon(userSearch);
    setFavoritePokemons([...favoritePokemons, pokemonChoosed]);
  };
  console.log({ favoritePokemons });
  useEffect(() => {
    if (pokemonList) getAllPokemons();
  }, []);
  return (
    <>
      <form>
        <>
          <label htmlFor='pokemon'>find your pokemon</label>
          <input
            list='pokemon'
            name='pokemon'
            id='pokemon'
            onChange={(e) => {
              setUserSearch(e.currentTarget.value);
              setPokemonList(
                pokemonList.filter((pokemon: string) => pokemon.includes(e.currentTarget.value)),
              );
            }}
          />
        </>
        <button type='submit' onClick={(e) => pokemonSearch(e)}>
          Add to Favorites
        </button>
      </form>
      <h2>Favorite pokemon</h2>
      {favoritePokemons.map((pokemon) => (
        <ul key={v4()}>
          <li>
            {pokemon.name}:
            <img
              alt={`${pokemon.name} picture`}
              src={pokemon.sprites.back_default}
            />
            <ul>
              <p>abilities:</p>{' '}
              {pokemon.abilities.map(
                (ability: { [key: string]: { name: string; url: string } }) => (
                  (<li key={ability.ability.url}>{ability.ability.name}</li>)
                ),
              )}
              <p>moves:</p>{' '}
              {pokemon.moves.map(
                (move: { [key: string]: { name: string; url: string } }) => (
                  <li key={move.move.url}>{move.move.name}</li>
                ),
              )}
            </ul>
          </li>
        </ul>
      ))}
      <Pagination
        currentPage={2}
        numberOfPages={3}
        pageLinks={['/contact', '/pokemon', '/review']}
      />
    </>
  );
};

export default Pokemon;
