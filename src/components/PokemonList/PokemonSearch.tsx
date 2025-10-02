import React from "react";
import { createUseStyles } from 'react-jss';
import { useSearch } from '../../contexts/SearchContext';

export const PokemonSearch = () => {
    const { searchString, setSearchString } = useSearch()
    const classes = useStyles();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value.toLowerCase())
    }

    return (
        <div className={classes.inputContainer}>
            <input
                className={classes.search}
                value={searchString}
                onChange={handleSearchChange}
                placeholder="Pokemon name"
            >
            </input>
            <button 
                className={classes.searchButton}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
    );
};

const useStyles = createUseStyles(
    {
        inputContainer: {
            display: 'flex',
            alignItems: 'center',
            padding: '0 0 0 12px',
            borderRadius: '9999px',
            background: 'white',
            border: '1px solid rgba(255, 255, 255, .25)',
            boxShadow: '0 2px 6px #0000001f, 0 4px 12px #00000014',
            maxWidth: '480px',
            margin: 'auto',
            transition: 'box-shadow .3s ease',
        },
        search: {
            flexGrow: '1',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#333',
            fontSize: '18px',
            padding: '4px 10px'
        },
        searchButton: {
            background: '#f3b184',
            border: 'none',
            borderRadius: '9999px',
            padding: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px #0003'
        },
        icon: {
            width: '20px',
            height: '20px',
            stroke: 'white'
        }

    }
)