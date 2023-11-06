import styles from './Subtitle.module.css';

export function Subtitle({children, mode}) {
    return <h2 className={`${styles.subtitle} ${styles[mode ? mode : '']}`}>{children}</h2>;
}
