import { Action } from 'redux';
import { ACTION_TYPES } from '../../../core/constants/pokemons';
import { PokemonsType } from '../../reducers/pokemons';

export interface PokemonsSet extends Action {
    type: typeof ACTION_TYPES.GET_POKEMONS,
    pokemons: PokemonsType,
}