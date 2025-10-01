import { useMemo } from 'react';
import { useQuery } from '@apollo/client/react';
import { useSearch } from '../contexts/Search';
import gql from 'graphql-tag';

export type Pokemon = {
  id: string;
  name: string;
  number: number;
  types: string[];
  image: string;
};

export type PokemonOption = {
  value: Pokemon['id'];
  label: Pokemon['name'];
};

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      types
      image
    }
  }
`;

export const useGetPokemons = () => {
  const { searchString } = useSearch()
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: Pokemon[] = useMemo(() => {
    return data?.pokemons || []
  }, [data]);

  const shownPokemons: Pokemon[] = useMemo(() => {
    if(!searchString) return pokemons;

    return pokemons.filter((p) => {
      return p.name.toLowerCase().includes(searchString.toLowerCase())
    })
  }, [pokemons, searchString])

  const pokemonOptions: PokemonOption[] = useMemo(
    () => pokemons.map((p: Pokemon) => ({ value: p.id, label: p.name })),
    [pokemons]
  );

  return {
    pokemons,          //full list
    shownPokemons,  
    pokemonOptions,
    ...queryRes,
  };
};
