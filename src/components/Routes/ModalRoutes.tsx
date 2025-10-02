import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { PokemonModal } from '../UI/PokemonModal';
import { useGetPokemons } from "src/hooks/useGetPokemons";

export const ModalRoutes = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { pokemons } = useGetPokemons();
    const location = useLocation();
    const background = location.state?.background
    
    const selectedPokemon = id
                             ? pokemons.find(p => p.id === id)
                             : null;

    const handleClose = () => {
        navigate(background?.pathname || "/pokemon")
    }

    return selectedPokemon && background ? (
        <PokemonModal
            id={selectedPokemon.id}
            name={selectedPokemon.name}
            open={true}  
            onClose={handleClose}
        />
    ) : null;
}