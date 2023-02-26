import { ActionCreator } from 'redux';
import { Dispatch } from 'redux';
import { ACTION_TYPES } from '../../constants/pokemons';
import { PokemonsType } from 'core/reducers/pokemons';
import { PokemonsSet } from './pokemonsActionsType';
import { getPokemons } from '../../../service/pokemon';

export const getAllPokemons: ActionCreator<PokemonsSet> = (pokemons: PokemonsType) => {
    return {
        type: ACTION_TYPES.GET_POKEMONS,
        pokemons,
    };
}

export const fetchPokemons = () => async (dispatch: Dispatch) => {
  const response = await getPokemons();
  console.log({response})
  dispatch(getAllPokemons(response))
}
  
  