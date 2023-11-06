import {useEffect, useState} from 'react';
import {validateInn} from '../lib/validateInn';

export function useCheckInn() {
    let [inn, setInn] = useState('');
    let [checkInnResult, setCheckInnResult] = useState(false);
    let [innErrorMessage, setInnErrorMessage] = useState(false);

    const handleInn = (e) => setInn((inn = e.target.value));

    useEffect(() => {
        inn !== '' && validateInn(inn) ? setCheckInnResult(true) : setCheckInnResult(false);
    }, [inn]);

    useEffect(() => {
        if (inn !== '') {
            validateInn(inn, innErrorMessage, setInnErrorMessage, 'show-error');
        } else {
            setInnErrorMessage('');
        }
    }, [inn]);

    return [inn, checkInnResult, innErrorMessage, handleInn];
}
