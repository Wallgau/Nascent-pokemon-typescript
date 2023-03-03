import { ActionCreator } from 'redux';
import { Dispatch } from 'redux';
import { PokemonsType, PokemonType } from 'core/reducers/pokemons';
import { ACTION_TYPES } from '../../constants/pokemons';
import { PokemonsSet, PokemonSet } from './pokemonsActionsType';
import { getPokemons, getPokemon } from '../../../service/pokemon';

export const getAllPokemons: ActionCreator<PokemonsSet> = (pokemons: PokemonsType) => {
    return {
        type: ACTION_TYPES.GET_POKEMONS,
        pokemons
    };
};

export const addPokemon: ActionCreator<PokemonSet> = (favoriteList: PokemonType[]) => {
    return {
        type: ACTION_TYPES.ADD_POKEMON,
        favoritePokemons: favoriteList
    };
};

export const fetchPokemons = () => async (dispatch: Dispatch) => {
    const response = await getPokemons();
    dispatch(getAllPokemons(response));
};

export const addPokemonToFavoriteList =
    (favoriList: PokemonType[], pokemon: string) => async (dispatch: Dispatch) => {
        const response = await getPokemon(pokemon);
        const newPokemon = {
            name: response.name,
            abilities: response.abilities.map(
                (ability: {
                    ability: {
                        name: string;
                        url: string;
                    };
                }) => ability.ability.name
            ),
            moves: response.moves.map((move: any) => move.move.name),
            picture: response.sprites.back_default
        };
        console.log({ response, newPokemon });
        dispatch(addPokemon([...favoriList, { ...newPokemon }]));
    };
