import styles from './FormSelect.module.css';
import {useToggleFormSelect} from '../../model/useToggleFormSelect';

export function FormSelect({children, ...props}) {
    const [selectStatus, handleFormSelect] = useToggleFormSelect();
    return (
        <div
            onClick={handleFormSelect}
            className={`${styles['search-form__select']} ${styles[selectStatus ? 'open' : '']}`}
        >
            <select name="tone" id="tone" {...props}>
                {children}
            </select>
        </div>
    );
}
