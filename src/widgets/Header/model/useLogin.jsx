import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useNavigate} from 'react-router-dom';

export function useLogin() {
    const context = useContext(GlobalStates);
    const navigate = useNavigate();
    const burgerToggle = context.burgerToggle;
    const handleAuth = (e) => {
        burgerToggle(e);
        navigate('/auth');
    };
    return handleAuth;
}
