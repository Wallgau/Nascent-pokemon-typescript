import { ACTION_TYPES } from '../../constants/pokemons';

export interface PokemonType {
        name: string;
        abilities: string[],
        moves: string[],
        picture: string
    
}

export type PokemonsType = string[];

export interface PokemonsReducerType {
    pokemons: PokemonsType,
    favoritePokemons: PokemonType[]
}


const initialState = {
    pokemons: [],
    favoritePokemons: []
  }
  
  const pokemonsReducer = (state: PokemonsReducerType = initialState, action: any) => {
    switch (action.type) {
      case ACTION_TYPES.GET_POKEMONS:
        const { pokemons } = action;
        return {
            ...state,
            pokemons,
        };
        case ACTION_TYPES.ADD_POKEMON:
            const { favoritePokemons } = action;
            console.log({ favoritePokemons });
            return {
                ...state,
                favoritePokemons: [...favoritePokemons],
            };
      default:
        return state
    }
  }

  export default pokemonsReducer;