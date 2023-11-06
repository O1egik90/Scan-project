import styles from './Input.module.css';

export function Input({type, mode, ...props}) {
    return <input className={`${styles.form__input} ${styles[mode]}`} type={type ? type : 'text'} {...props} />;
}
