export const getPokemons = async () => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${1700}`, {
    headers: {
      method: 'GET',
    },
  });
  const data = result.json()
    .then((res) => res.results.map((response: { name: string, url: string }) => response.name));
  return data;
};

export const getPokemon = async (pokemonName: string) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
    headers: {
      method: 'POST',
    },
  });
  const data = result.json().then((res) => res);
  return data;
};
