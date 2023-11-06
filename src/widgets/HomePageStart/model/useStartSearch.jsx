import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useNavigate} from 'react-router-dom';

export function useStartSearch() {
    const context = useContext(GlobalStates);
    const navigate = useNavigate();

    const handleStartSearch = () => navigate('/search');
    return [context.authCompleted, handleStartSearch];
}
