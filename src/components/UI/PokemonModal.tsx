import React from "react";
import { BaseModal } from "./BaseModal";
import { createUseStyles } from 'react-jss';
import { useGetPokemon } from "src/hooks/useGetPokemon";
import { PokemonChips } from "../PokemonList/PokemonChips";

type Props = {
    id: string,
    name: string,
    open: boolean
    onClose: () => void
};

export const PokemonModal = ({id, name, open, onClose}: Props) => {
    const classes = useStyles();
    const { pokemon } = useGetPokemon(id, name)

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title={
                <div className={classes.title}>
                    <img src={pokemon?.image} alt={pokemon?.name} className='image' />
                    <span className={classes.name}>
                    {name}
                    </span>
                </div>
            }
            mainText={
                // <div className={classes.main}>
                //     <p>Classification: {pokemon?.classification}</p>
                //     <p>Types: {pokemon?.types.join(', ')}</p>
                //     <p>Weaknesses: {pokemon?.weaknesses.join(', ')}</p>
                // </div>
                pokemon && <PokemonChips types={pokemon?.types} resistant={pokemon?.resistant} weaknesses={pokemon?.weaknesses} />
            }
            actions={
                <>
                  <button onClick={onClose} className={classes.closeButton}>Close</button>
                </>
            }
        />
    ) 
}

const useStyles = createUseStyles(
    {
        name: {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            color: '#426b59'
        },
        closeButton: {
            backgroundColor: '#f5b481',
            color: '#333',
            borderRadius: '10px',
            cursor: 'pointer',
            '&:hover': {
                fontWeight: 'bolder'
            }
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            '& img': {
                width: '50px',
                height: '50px',
                objectFit: 'contain'
            }
        },
        main: {
            '& p': {
                color: '#333'
            },
        }
    }
)