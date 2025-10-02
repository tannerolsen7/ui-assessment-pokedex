import { createUseStyles } from 'react-jss';
import type { Pokemon } from 'src/hooks/useGetPokemons';
import { Link, useLocation, Location, To } from 'react-router-dom';

type Props = { 
  pkmn: Pokemon
}

export const PokemonListItem = ({pkmn}: Props) => {
  const classes = useStyles();
  const location: Location = useLocation();

  return (
    <Link   
      to={`/pokemon/${pkmn.id}`}
      state={{ background: location }}
    >
      <div key={pkmn.id} className={classes.listItem}>
        <img src={pkmn.image} alt={pkmn.name} className={classes.picture}/>
        <div className={classes.info}>
          <div className={classes.identifier}>
            <h1 className={classes.name}>{pkmn.name}</h1>
            <p className={classes.number}>{pkmn.number}</p>
          </div>
          <div className={classes.types}>
            {pkmn.types.map((t,index) => (
              <p key={index} className={classes.type}>{t}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
};

const useStyles = createUseStyles(
    {
      listItem: {
        '&:hover': {
          transform: 'translateY(-4px)',
        },
        cursor: 'pointer',
        display: 'flex',
        margin: '8px 0',
        background: 'linear-gradient(to right, #ffffff 20%, #f0f4f8 80%)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        borderRadius: '16px',
        padding: '8px 16px',
        gap: '20px',
        textAlign: 'left',
        width: 'fit-content',

        '@media (max-width: 1000px)': {
          flexDirection: 'column',
          width: '200px'
        }
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