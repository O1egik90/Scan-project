import {useEffect, useState} from 'react';
import {bodyLock} from '../lib/bodyLock';
import {getFromStorage} from '../lib/getFromStorage';

export function useGlobalStates() {
    const [burgerActive, setBurgerActive] = useState(false); // бургер меню
    const [authCompleted, setAuthCompleted] = useState(false); // авторизация
    const [loading, setLoading] = useState(false); // лоадер на странице вывода результатов
    const [headerLoading, setHeaderLoading] = useState(false); // лоадер в хэдере
    const [searchFormDataSent, setSearchFormDataSent] = useState(false); // отправка формы поиска
    const [selectStatus, setSelectStatus] = useState(false); // кастомный select в форме поиска
    const [ids, setIds] = useState('');
    // управление бургером
    const burgerToggle = () => setBurgerActive((prev) => document.body.clientWidth < 1100 && !prev);
    bodyLock(burgerActive);
    // управляем состоянием авторизации
    const expireDate = new Date(getFromStorage('expire')).getTime();
    const accessToken = getFromStorage('accessToken');
    useEffect(() => {
        accessToken && expireDate > Date.now() ? setAuthCompleted(true) : setAuthCompleted(false);
    }, []);
    // поворачивает кастомную стрелку select в форме поиска
    useEffect(() => {
        document.body.addEventListener('click', (e) => !e.target.closest('select') && setSelectStatus(false));
    }, [selectStatus]);

    const states = {
        authCompleted,
        setAuthCompleted,
        burgerActive,
        setBurgerActive,
        burgerToggle,
        loading,
        setLoading,
        searchFormDataSent,
        setSearchFormDataSent,
        selectStatus,
        setSelectStatus,
        headerLoading,
        setHeaderLoading,
        ids,
        setIds,
    };

    return states;
}
