import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useShowUserInfo} from '../api/useShowUserInfo';

export function useInfoPanel() {
    const context = useContext(GlobalStates);
    const headerLoading = context.headerLoading;
    const [count, limit] = useShowUserInfo();
    return [headerLoading, count, limit];
}
