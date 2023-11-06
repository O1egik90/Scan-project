import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useNavigate} from 'react-router-dom';
import {smoothLink} from '/src/app/lib/smoothLink';

export function useHeaderNavigation() {
    const context = useContext(GlobalStates);
    const navigate = useNavigate();

    const handleLogo = (e) => {
        e.preventDefault();
        context.setBurgerActive(false);
        navigate('/');
    };

    const handleMenuLink = (e) => {
        context.burgerToggle();
        smoothLink(e);
        navigate('/');
    };

    const getLogoImagePath = () => `./${context.burgerActive ? 'footer' : 'header'}-logo.svg`;

    return [context, handleLogo, handleMenuLink, getLogoImagePath];
}
