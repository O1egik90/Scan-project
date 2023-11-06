import {useEffect, useState} from 'react';

export function useCheckDates() {
    let [start, setStart] = useState('');
    let [startError, setStartError] = useState(false);
    let [end, setEnd] = useState('');
    let [endError, setEndError] = useState(false);
    let [correctDates, setCorrectDates] = useState(false);

    const handleStart = (e) => setStart((start = e.target.value));
    const handleEnd = (e) => setEnd((end = e.target.value));

    useEffect(() => {
        const timeDifferenceStart = new Date(start).getTimezoneOffset() * 60 * 1000;
        const timeDifferenceEnd = new Date(end).getTimezoneOffset() * 60 * 1000;
        start = Date.parse(start) + timeDifferenceStart;
        end = Date.parse(end) + timeDifferenceEnd;

        if (start) {
            start > end || start > Date.now() ? setStartError(true) : setStartError(false);
        }

        if (end) {
            end > Date.now() ? setEndError(true) : setEndError(false);
        }

        if (start && end) {
            startError || endError ? setCorrectDates(false) : setCorrectDates(true);
        }
    }, [start, end, startError, endError]);

    return [start, handleStart, end, handleEnd, startError, endError, correctDates];
}
