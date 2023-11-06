import {useEffect, useState} from 'react';

export function useCheckLimit() {
    let [limit, setLimit] = useState('1');
    let [checkLimit, setCheckLimit] = useState(false);
    const handleLimit = (e) => setLimit((limit = e.target.value));

    useEffect(() => {
        limit < 1 || limit > 1000 || !isFinite(limit) ? setCheckLimit(false) : setCheckLimit(true);
    }, [limit]);

    return [limit, handleLimit, checkLimit];
}
