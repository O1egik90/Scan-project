import styles from './FormOption.module.css';

export function FormOption({children, ...props}) {
    return (
        <option className={styles['search-form__option']} {...props}>
            {children}
        </option>
    );
}
