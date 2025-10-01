import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListItem } from './PokemonListItem';
import { PokemonSearch } from './PokemonSearch';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <div>
        <div className={classes.searchContainer}>
          <PokemonSearch />
        </div>

        <div className={classes.listContainer}>
          {pokemons.map((p) => (
            <PokemonListItem key={p.id} pkmn={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
    },
    searchContainer: {
      marginBottom: '12px'
    },
    listContainer: {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: '1400px',
      margin: 'auto',
      flexWrap: 'wrap',
      gap: '12px',
    },
    info: {
      '& p, & h1': {
        margin: '0',
      },
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto 0',
      gap: '4px'
    },
    picture: {
      height: '100px',
      width: '100px',
      objectFit: 'contain',
    },
    identifier: {
      display: 'flex',
      // flexDirection: 'column',
      gap: '4px',
      alignItems: 'baseline'
    },
    name: {
      fontWeight: 'bold',
      color: '#333',
    },
    number: {
      fontSize: '1.2rem',
      color: 'rgba(0, 0, 0, 0.66)'
    },
    types: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '4px',
      fontStyle: 'italic'
    },
    type: {
      color: 'rgba(0, 0, 0, 0.66)'
    }
  },
  { name: 'PokemonList' }
);
