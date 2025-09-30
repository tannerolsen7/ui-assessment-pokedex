import { createUseStyles } from 'react-jss';
import type { Pokemon } from 'src/hooks/useGetPokemons';

type Props = { 
    pkmn: Pokemon
}

export const PokemonListItem = ({pkmn}: Props) => {
    const classes = useStyles();

    return (
        <div key={pkmn.id} className={classes.listItem}>
            <img src={pkmn.image} alt={pkmn.name} className={classes.picture}/>
            <div className={classes.info}>
            <div className={classes.identifier}>
                <h1 className={classes.name}>{pkmn.name}</h1>
                <p className={classes.number}>{pkmn.number}</p>
            </div>
            <div className={classes.types}>
                {pkmn.types.map((t) => (
                    <p className={classes.type}>{t}</p>
                ))}
            </div>
            </div>
        </div>
    )
};

const useStyles = createUseStyles(
    {
      listItem: {
        '&:hover': {
          transform: 'translateY(-2px)',
          transition: 'transform ease-in-out 0.5s'
        },
        cursor: 'pointer',
        display: 'flex',
        margin: '8px 0',
        background: 'linear-gradient(to right, #ffffff 20%, #f0f4f8 80%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
        padding: '8px 16px',
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
        gap: '5px',
        alignItems: 'baseline'
      },
      name: {
        fontWeight: 'bold',
        color: 'rgb(19, 25, 36)',
      },
      number: {
        fontSize: '1.3rem',
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