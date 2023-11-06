import {useState, useContext, useMemo, useEffect} from 'react';
import {GlobalStates} from '../model/GlobalStatesProvider';
import {BASE_URL} from '../constants/baseUrl';
import {objectToJson} from '/src/app/lib/objectToJson';

export function useFetch(method, token, body) {
    const context = useContext(GlobalStates);
    let [error, setError] = useState(false); // сообщение об ошибке

    const options = {
        method: method,
        headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    };
    if (body) options.body = objectToJson(body);
    if (token) options.headers.Authorization = `Bearer ${token}`;

    const sendRequest = function (url) {
        context.setLoading(true);
        return fetch(`${BASE_URL}${url}`, options)
            .then((request) => {
                if (request.status > 299) {
                    setError(true);
                    console.log('Код ошибки:', request.status);
                } else {
                    setError(false);
                    return request.json();
                }
            })
            .finally(() =>
                setTimeout(() => {
                    context.setLoading(false);
                    context.setHeaderLoading(false);
                }, 500)
            ); // с небольшой задержкой
    };
    return [sendRequest, error, setError];
}
