import { ACTION_TYPES } from '../../constants/pokemons';

export interface PokemonsType {
    pokemons: {
        name: string,
        url: string
    }[]
}

const initialState = {
    pokemons: [{
        name: "",
        url: ""
    }]
  }
  
  const pokemonsReducer = (state: PokemonsType = initialState, action: any) => {
    switch (action.type) {
      case ACTION_TYPES.GET_POKEMONS:
        const { pokemons } = action;
        return {
            ...state,
            pokemons,
        };
      default:
        return state
    }
  }

  export default pokemonsReducer;