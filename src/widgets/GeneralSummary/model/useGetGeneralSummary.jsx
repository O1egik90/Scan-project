import {useContext} from 'react';
import {GlobalStates} from '/src/app/model/GlobalStatesProvider';
import {getFromStorage} from '/src/app/lib/getFromStorage';
import {formatDate} from '/src/app/lib/formatDate';

export function useGetGeneralSummary() {
    const context = useContext(GlobalStates); // для лоадера
    const data = JSON.parse(getFromStorage('generalSummary')).data; // получаем данные

    if (data.length > 0) {
        let searchResults = data[0].data; // всего документов
        const documentsCount = searchResults.reduce((akk, item) => (akk += item.value), 0); // общее кол-во
        const riskFactors = data[1].data; // риски

        if (searchResults && riskFactors) {
            searchResults.forEach((item) => {
                riskFactors.forEach((risks) => (item.risks = risks.value)); // добавляем свойства риски объектам
                item.date = formatDate(item.date); // приводим строку даты в неободимый формат
            });
        }

        return [context, documentsCount, searchResults];
    }

    return [context];
}
