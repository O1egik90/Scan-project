import styles from './Label.module.css';

export function Label({elemId, children, type, mode}) {
    return (
        <p className={`${styles.form__label} ${type ? styles[type] : ''}`}>
            {mode === 'text' ? children : <label htmlFor={elemId}>{children}</label>}
        </p>
    );
}
