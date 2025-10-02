import { createUseStyles } from 'react-jss';

export const PokemonListItemSkeleton = () => {
  const classes = useStyles();

  return (
    <div className={classes.listItem}>
      <div className={`${classes.picture} ${classes.skeleton}`} />
      <div className={classes.info}>
        <div className={classes.identifier}>
          <div className={`${classes.name} ${classes.skeleton}`} />
          <div className={`${classes.number} ${classes.skeleton}`} />
        </div>
        <div className={classes.types}>
          <div className={`${classes.type} ${classes.skeleton}`} />
          <div className={`${classes.type} ${classes.skeleton}`} />
        </div>
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    listItem: {
      display: 'flex',
      margin: '8px 0',
      background: '#fff',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '16px',
      padding: '8px 16px',
      gap: '20px',
      width: 'fit-content',
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      margin: 'auto 0',
    },
    picture: {
      height: '100px',
      width: '100px',
      borderRadius: '12px',
      background: '#e0e0e0',
    },
    identifier: {
      display: 'flex',
      gap: '5px',
      alignItems: 'baseline',
    },
    name: {
      width: '80px',
      height: '20px',
      borderRadius: '4px',
      background: '#e0e0e0',
    },
    number: {
      width: '40px',
      height: '16px',
      borderRadius: '4px',
      background: '#e0e0e0',
    },
    types: {
      display: 'flex',
      gap: '5px',
    },
    type: {
      width: '50px',
      height: '16px',
      borderRadius: '8px',
      background: '#e0e0e0',
    },
    skeleton: {
      animation: '$shimmer 1.5s infinite linear',
      background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
      backgroundSize: '200% 100%',
    },
    '@keyframes shimmer': {
      '0%': { backgroundPosition: '-200% 0' },
      '100%': { backgroundPosition: '200% 0' },
    },
  },
  { name: 'PokemonListSkeleton' }
);
