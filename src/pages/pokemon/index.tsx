import { useEffect, useState } from 'react';
import Pagination from '../../components/pagination';
import { useSelector } from 'react-redux';
import { addPokemonToFavoriteList, fetchPokemons } from '../../core/actions/pokemons';
import { PokemonType } from '../../core/reducers/pokemons';
import { useAppDispatch } from '../../core/hooks';

const Pokemon = () => {
    const dispatch = useAppDispatch();
    const pokemons = useSelector((state: any) => state.pokemonsReducer.pokemons);
    const favoritesList = useSelector((state: any) => state.pokemonsReducer.favoritePokemons);
    const [pokemonList, setPokemonList] = useState<string[]>([]);
    const [userSearch, setUserSearch] = useState('');

    const pokemonSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addPokemonToFavoriteList([...favoritesList], userSearch));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserSearch(e.currentTarget.value);
    };

    useEffect(() => {
        if (!pokemons.length) dispatch(fetchPokemons());
    }, []);

    useEffect(() => {
        if ((pokemons?.length && !pokemonList.length) || userSearch)
            setPokemonList([...pokemons, userSearch]);
    }, [userSearch]);

    return (
        <>
            <label htmlFor="pokemon-select">Select a pokemon</label>
            <input list="pokemon-select" value={userSearch} onChange={handleChange} />
            <datalist id="pokemon-select">
                {pokemonList?.map((pokemon: string) => (
                    <option value={pokemon} key={pokemon}>
                        {pokemon}
                    </option>
                ))}
            </datalist>
            <button type="submit" onClick={(e) => pokemonSearch(e)}>
                Add to Favorites
            </button>
            <h2>Favorite pokemon</h2>
            {favoritesList?.map((pokemon: PokemonType) => (
                <ul key={pokemon.name}>
                    <li>
                        <>
                            {pokemon.name}:
                            <img alt={`${pokemon.name} picture`} src={pokemon.picture} />
                            <ul>
                                <p>abilities:</p>{' '}
                                {pokemon.abilities.map((ability) => (
                                    <li key={`${ability}-${pokemon.name}`}>{ability}</li>
                                ))}
                                <p>moves:</p>{' '}
                                {pokemon.moves.map((move) => (
                                    <li key={`${move}-${pokemon.name}`}>{move}</li>
                                ))}
                            </ul>
                        </>
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
