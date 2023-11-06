import styles from './FormCheckbox.module.css';

export function FormCheckbox({children, ...props}) {
    return (
        <div className={styles.checkbox}>
            <label className={styles.checkbox__label} {...props}>
                <input className={styles.checkbox__input} type="checkbox" {...props} />
                <span className={styles.checkbox__text}>{children}</span>
            </label>
        </div>
    );
}
