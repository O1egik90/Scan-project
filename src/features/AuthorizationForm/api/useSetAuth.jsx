import {useCallback, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useFetch} from '/src/app/lib/useFetch';

export function useSetAuth(login, pass) {
    // состояние авторизации
    const context = useContext(GlobalStates);
    const setAuthCompleted = context.setAuthCompleted;
    // для запроса используем кастомный переиспользуемый хук useFetch (также управляет лоадером)
    const [sendRequest, error, setError] = useFetch('POST', '', {login: login, password: pass});
    // кешируем ф-ю, удаляющую сообщение об ошибке
    const removeError = useCallback(() => {
        error && setError(false);
    }, [error]);
    const navigate = useNavigate(); // навигация
    useEffect(() => context.setHeaderLoading(true), []);
    // отправляем запрос, если успешно - авторизуемся, сохраняем токен, переходим на главную
    const handleAuthorization = function () {
        return sendRequest('account/login')
            .then((data) => {
                localStorage.setItem(`${'accessToken'}`, data.accessToken);
                localStorage.setItem(`${'expire'}`, data.expire);
                setAuthCompleted(true);
                navigate('/');
            })
            .catch((err) => {
                console.log('Данные не загрузились', err);
                navigate('/auth');
            });
    };
    return [handleAuthorization, error, removeError];
}
