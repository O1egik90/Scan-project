import styles from './InputDate.module.css';

export function InputDate({children, dateCheck, ...props}) {
    return (
        <label {...props} className={styles['date-wrapper']}>
            <input className={`${styles.date} ${dateCheck ? styles.error : ''}`} type="date" {...props} />
            <input className={`${styles.text} ${dateCheck ? styles.error : ''}`} readOnly type="text" {...props} />
        </label>
    );
}
