import {useEffect, useState, useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {saveToStorage} from '/src/app/lib/saveToStorage';
import {createRequestBody} from '../api/createRequestBody';
import {BASE_URL} from '/src/app/constants/baseUrl';
import {getFromStorage} from '/src/app/lib/getFromStorage';

export function useGetDocumentCards() {
    const context = useContext(GlobalStates);
    const [loading, setLoading] = useState(false); // лоадер
    let [documents, setDocuments] = useState(''); // получаем id в json формате
    let [lazyArray, setLazyArray] = useState([]); // массив для макс. 10 id, кот. будем отправлять
    let [documentCards, setDocumentCards] = useState([]); // карточки документов для отрисовки
    let [limit, setLimit] = useState(0); // лимит

    useEffect(() => {
        saveToStorage('documents', context.ids); // сохраняем id документов из контекста в localStorage
        setDocuments((documents = getFromStorage('documents'))); // создаем новое состояние id документов
        if (documents) {
            setDocuments((documents = JSON.parse(documents))); // парсим json
            if (documents.length > 0) {
                setDocuments(documents.map((item) => item.encodedId)); // получаем массив всех id
                setLazyArray((lazyArray = documents.slice(limit, limit + 10))); // забираем только 10 id
            }
        }
    }, [context.ids, limit]);
    // создаем запрос / обрабатываем / результат добавляем в массив для отображения / обновляем массив
    useEffect(() => {
        if (lazyArray && lazyArray.length > 0) {
            setLoading(true);
            fetch(`${BASE_URL}documents`, createRequestBody(lazyArray))
                .then((data) => (data.status > 299 ? console.log('Код ошибки:', data.status) : data.json()))
                .then((documents) => documents.map((doc) => doc.ok))
                .then((cards) => setDocumentCards(documentCards.concat(cards)))
                .catch((e) => console.log('Ошибка запроса:', e))
                .finally(() => setTimeout(() => setLoading(false), 500));
        }
    }, [lazyArray]);

    return [documents, documentCards, limit, setLimit, loading];
}
