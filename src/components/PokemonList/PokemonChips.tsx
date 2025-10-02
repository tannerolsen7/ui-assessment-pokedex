import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { createUseStyles } from 'react-jss';
import { typeColors } from '../../constants/pokemonTypeColors';

type PokemonProps = {
  types: string[];
  resistant: string[];
  weaknesses: string[];
};

export function PokemonChips({ types, resistant, weaknesses }: PokemonProps) {
    const classes = useStyles();
  
    return (
    <div className={classes.chipsContainer}>
      <h3>Types</h3>
      <Stack direction="row" spacing={1}>
        {types.map(type => (
          <Chip
            key={type}
            label={type}
            sx={{
              backgroundColor: typeColors[type] || 'grey',
              color: 'white',
              fontWeight: 'bold',
            }}
          />
        ))}
      </Stack>

      <h3>Resistant</h3>
      <Stack direction="row" spacing={1}>
        {resistant.map(res => (
          <Chip
            key={res}
            label={res}
            sx={{
              backgroundColor: typeColors[res] || 'grey',
              color: 'white',
              fontWeight: 'bold',
            }}
          />
        ))}
      </Stack>

      <h3>Weaknesses</h3>
      <Stack direction="row" spacing={1}>
        {weaknesses.map(weak => (
          <Chip
            key={weak}
            label={weak}
            sx={{
              backgroundColor: typeColors[weak] || 'grey',
              color: '#333',
              fontWeight: 'bold',
            }}
          />
        ))}
      </Stack>
    </div>
  );
}

const useStyles = createUseStyles(
    {
        chipsContainer: {
            '& h3': {
                color: '#333',
                marginBottom: '4px',
                marginTop: '12px'
            }
        },
        
    }
)
