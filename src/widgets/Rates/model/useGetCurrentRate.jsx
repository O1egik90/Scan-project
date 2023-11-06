import {useState, useEffect, useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';

export function useGetCurrentRate() {
    const context = useContext(GlobalStates);
    const authCompleted = context.authCompleted;
    let [currentRate, setCurrentRate] = useState(null);

    useEffect(() => {
        if (authCompleted) setCurrentRate('Beginner');
    }, [authCompleted]);

    return currentRate;
}
