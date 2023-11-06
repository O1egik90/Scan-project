import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';

export function useBurgerToggle() {
    const context = useContext(GlobalStates);
    const burgerActive = context.burgerActive;
    const burgerToggle = context.burgerToggle;
    return [burgerActive, burgerToggle];
}
