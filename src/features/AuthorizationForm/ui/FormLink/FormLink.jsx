import styles from './FormLink.module.css';

export function FormLink({mode, children, props}) {
    return (
        <a {...props} className={`${styles.form__link} ${styles[mode]}`}>
            {children}
        </a>
    );
}
