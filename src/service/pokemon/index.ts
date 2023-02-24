export const getPokemons = () => {
  const result = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${1700}`, {
    headers: {
      method: 'GET',
    },
  })
    .then((res) => res.json())
    .then((res) => res.results.map((response: { name: string, url: string }) => response.name));
  return result;
};

export const getPokemon = async (pokemonName: string) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    headers: {
      method: 'POST',
    },
  });
  const data = result.json()
    .then((res) => res.results.map((response: { name: string, url: string }) => response.name));
  return data;
};
