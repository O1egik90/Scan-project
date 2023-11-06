import {useState} from 'react';

export function useToggleCheckboxes() {
    const handleCheckbox = (e, prop) => setCheckboxes((prev) => ({...prev, [prop]: e.target.checked}));

    const [checkboxes, setCheckboxes] = useState({
        maxCompleteness: false,
        businessContext: false,
        mainRole: false,
        riskFactors: false,
        techNews: false,
        announcements: false,
        newsSummary: false,
    });

    return [checkboxes, handleCheckbox];
}
