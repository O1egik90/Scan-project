import styles from './FormRow.module.css';

export function FormRow({children, mode}) {
    return <div className={`${styles.form__row} ${styles[mode ? mode : '']}`}>{children}</div>;
}
