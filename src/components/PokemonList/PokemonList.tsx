import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListItem } from './PokemonListItem'

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const items = pokemons.map((p) => <PokemonListItem key={p.id} pkmn={p} />);

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {pokemons.map((p) => (
        <PokemonListItem key={p.id} pkmn={p} />
      ))}
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
      flexWrap: 'wrap',
      gap: '10px'
    },
    listItem: {
      '&:hover': {
        transform: 'translateY(-2px)',
        transition: 'transform ease-in-out 0.5s'
      },
      cursor: 'pointer',
      display: 'flex',
      margin: '8px 0',
      background: 'white',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      // background: 'rgba(255, 255, 255, 0.2)',
      // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      // backdropFilter: 'blur(10.6px)',
      // webkitBackdropFilter: 'blur(10.6px)',
      // border: '1px solid rgba(255, 255, 255, 1)',
      borderRadius: '16px',
      padding: '16px 24px',
      gap: '20px',
      textAlign: 'left'
    },
    info: {
      '& p, & h1': {
        margin: '0',
      },
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto 0',
      gap: '5px'
    },
    picture: {
      height: '100px',
      width: '100px',
      objectFit: 'contain',
    },
    identifier: {
      display: 'flex',
      // flexDirection: 'column',
      gap: '5px',
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
      gap: '5px',
      fontStyle: 'italic'
    },
    type: {
      color: 'rgba(0, 0, 0, 0.66)'
    }
  },
  { name: 'PokemonList' }
);
