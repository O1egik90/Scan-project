import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {useFetch} from '/src/app/lib/useFetch';
import {getFromStorage} from '/src/app/lib/getFromStorage';
import {saveToStorage} from '/src/app/lib/saveToStorage';

export function useSendFormData(formData) {
    const context = useContext(GlobalStates);
    const navigate = useNavigate();
    const accessToken = getFromStorage('accessToken');
    const [sendRequest, ...states] = useFetch('POST', accessToken, formData);
    // Очищаем значения, чтобы каждый раз были актуальные после отправки запроса
    useEffect(() => {
        localStorage.removeItem('documents');
        localStorage.removeItem('generalSummary');
        context.setIds('');
    }, [context]);

    const handleSendFormData = async function () {
        await sendRequest('objectsearch/histograms').then((data) => {
            context.setSearchFormDataSent(true); // отмечаем что запрос отправлен (см. AppRouter)
            navigate('/search-output'); // переходим на страницу с выводом результатов поиска
            saveToStorage('generalSummary', data); // сохраняем данные в localStorage
        });
        await sendRequest('objectsearch').then((data) => context.setIds((context.ids = data.items)));
    };

    return handleSendFormData;
}
