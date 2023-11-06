import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';

export function useToggleFormSelect() {
    const context = useContext(GlobalStates);
    const setSelectStatus = context.setSelectStatus;
    const selectStatus = context.selectStatus;
    const handleSelectStatus = () => setSelectStatus((prev) => !prev);
    return [selectStatus, handleSelectStatus];
}
