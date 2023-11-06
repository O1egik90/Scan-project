import {useEffect, useState, useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useFetch} from '/src/app/lib/useFetch';
import {getFromStorage} from '/src/app/lib/getFromStorage';

export function useShowUserInfo() {
    const context = useContext(GlobalStates);
    const authCompleted = context.authCompleted;
    const accessToken = getFromStorage('accessToken');
    const [count, setCount] = useState();
    const [limit, setLimit] = useState();

    const [sendRequest, ...states] = useFetch('GET', accessToken);

    useEffect(() => {
        if (authCompleted) {
            sendRequest('account/info')
                .then((data) => {
                    setCount(data.eventFiltersInfo.usedCompanyCount);
                    setLimit(data.eventFiltersInfo.companyLimit);
                })
                .catch((error) => console.log('Данные не загрузились', error));
        }
    }, [authCompleted]);

    return [count, limit];
}
