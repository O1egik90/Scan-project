import React from 'react';
import {useGlobalStates} from './useGlobalState';

export const GlobalStates = React.createContext();
export function GlobalStatesProvider({children}) {
    const states = useGlobalStates();
    return <GlobalStates.Provider value={states}>{children}</GlobalStates.Provider>;
}
