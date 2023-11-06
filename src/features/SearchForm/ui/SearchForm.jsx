import styles from './SearchForm.module.css';
import {useState} from 'react';
import {useSendFormData} from '../api/useSendFormData';
import {useCheckLimit} from '../model/useCheckLimit';
import {useCheckInn} from '../model/useCheckInn';
import {useCheckDates} from '../model/useCheckDates';
import {useToggleCheckboxes} from '../model/useToggleCheckboxes';
import {createRequestBody} from '../api/createRequestBody';
import {FormRow, Input, Label, Hint, Button} from '/src/shared';
import {FormCheckbox} from './FormCheckbox/FormCheckbox';
import {FormSelect} from './FormSelect/FormSelect';
import {FormOption} from './FormOption/FormOption';
import {RequaredMarker} from './RequaredMarker/RequaredMarker';
import {InputDate} from './InputDate/InputDate';

export function SearchForm() {
    // Получаем из кастомных хуков вводимые значения формы, а также результаты их проверки и их обработчики
    let [inn, checkInnResult, innErrorMessage, handleInn] = useCheckInn(); // инн
    let [start, handleStart, end, handleEnd, startError, endError, correctDates] = useCheckDates(); // даты
    let [limit, handleLimit, checkLimit] = useCheckLimit(); // кол-во документов
    const [checkboxes, handleCheckbox] = useToggleCheckboxes(); // чекбоксы
    let [tonality, setTonality] = useState('any'); // тональнось
    const formData = {inn, start, end, limit, tonality, checkboxes}; // объединяем данные формы
    const requestBody = createRequestBody(formData); // формируем тело запроса
    const allChecksCompleted = checkInnResult && correctDates && checkLimit; // все проверки завершены
    const handleSendFormData = useSendFormData(requestBody); // обработчик для отправки запроса

    return (
        <form className={styles['search-form']} action="#" onSubmit={(e) => e.preventDefault()}>
            <div className={styles['required-fields']}>
                <FormRow mode="medium-margin-alt">
                    <Label elemId="inn">
                        ИНН компании <RequaredMarker status={inn !== '' ? checkInnResult : true} />
                    </Label>
                    <Input
                        onChange={(e) => handleInn(e)}
                        id="inn"
                        name="inn"
                        mode="search"
                        placeholder="10 цифр"
                        value={inn}
                    />
                    <Hint show={checkInnResult ? '' : 'error_alt'}>{innErrorMessage}</Hint>
                </FormRow>
                <FormRow>
                    <Label>Тональность</Label>
                    <FormSelect onChange={(e) => setTonality((tonality = e.target.value))}>
                        <FormOption value="any">Любая</FormOption>
                        <FormOption value="positive">Позитивная</FormOption>
                        <FormOption value="negative">Негативная</FormOption>
                    </FormSelect>
                </FormRow>
                <FormRow mode="medium-margin">
                    <Label elemId="limit">
                        Количество документов в выдаче <RequaredMarker status={limit !== '' ? checkLimit : true} />
                    </Label>
                    <Input
                        onChange={(e) => handleLimit(e)}
                        id="limit"
                        name="limit"
                        type="number"
                        min="1"
                        max="1000"
                        mode="search"
                        value={limit}
                        placeholder="От 1 до 1000"
                    />
                    <Hint show={!checkLimit && 'error_alt'}>Обязательное поле</Hint>
                </FormRow>
                <FormRow mode="big-margin">
                    <Label>
                        Диапазон поиска <RequaredMarker status={startError || endError ? false : true} />
                    </Label>
                    <div className={styles['date-range']}>
                        <InputDate
                            onChange={(e) => handleStart(e)}
                            value={start}
                            placeholder={start === '' ? 'Дата начала' : start}
                            dateCheck={startError}
                            name="date-start"
                            id="date-start"
                        />
                        <InputDate
                            onChange={(e) => handleEnd(e)}
                            value={end}
                            dateCheck={endError}
                            placeholder={end === '' ? 'Дата конца' : end}
                            name="date-end"
                            id="date-end"
                        />
                    </div>
                    <Hint show={startError || endError ? 'error_alt' : ''}>Введите корректные данные</Hint>
                </FormRow>
            </div>
            <div className={styles.checkboxes}>
                <FormCheckbox id="max" name="max" onChange={(e) => handleCheckbox(e, 'maxCompleteness')}>
                    Признак максимальной полноты
                </FormCheckbox>
                <FormCheckbox id="bus" name="bus" onChange={(e) => handleCheckbox(e, 'businessContext')}>
                    Упоминания в бизнес-контексте
                </FormCheckbox>
                <FormCheckbox id="role" name="role" onChange={(e) => handleCheckbox(e, 'mainRole')}>
                    Главная роль в публикации
                </FormCheckbox>
                <FormCheckbox id="risks" name="risks" onChange={(e) => handleCheckbox(e, 'riskFactors')}>
                    Публикации только с риск-факторами
                </FormCheckbox>
                <FormCheckbox id="tech" name="tech" onChange={(e) => handleCheckbox(e, 'techNews')}>
                    Включать технические новости рынков
                </FormCheckbox>
                <FormCheckbox id="calendar" name="calendar" onChange={(e) => handleCheckbox(e, 'announcements')}>
                    Включать анонсы и календари
                </FormCheckbox>
                <FormCheckbox id="news" name="news" onChange={(e) => handleCheckbox(e, 'newsSummary')}>
                    Включать сводки новостей
                </FormCheckbox>
            </div>
            <div className={styles['button-wrapper']}>
                <Button onClick={handleSendFormData} status={!allChecksCompleted ? 'btn-disabled' : ''}>
                    Поиск
                </Button>
                <Hint show="show">* Обязательные к заполнению поля</Hint>
            </div>
        </form>
    );
}
