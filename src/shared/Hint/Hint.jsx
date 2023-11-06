import styles from './Hint.module.css';

export function Hint({show, children}) {
    return <p className={`${styles.hint} ${styles[show]}`}>{children}</p>;
}
