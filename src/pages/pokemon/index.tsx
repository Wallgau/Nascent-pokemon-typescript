import { useEffect, useState } from 'react';
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
  console.log({favoritePokemons})
  useEffect(() => {
    if (pokemonList) getAllPokemons();
  }, []);
  return (
    <>
      <h2>Favorite pokemon</h2>
      <form>
          <>
              <label htmlFor="pokemon">find your pokemon</label>
              <input list='pokemon' name='pokemon' id="pokemon" onChange={(e) => {
                setUserSearch(e.currentTarget.value);
                setPokemonList(pokemonList.filter(
                  (pokemon: string) => pokemon.includes(e.currentTarget.value),
                ));
              }}/>
          </>
          <button type="button" onClick={(e) => pokemonSearch(e)}>Search</button>
      </form>
      <Pagination
        currentPage={2}
        numberOfPages={3}
        pageLinks={['/contact', '/pokemon', '/review']}
      />
    </>
  );
};

export default Pokemon;
