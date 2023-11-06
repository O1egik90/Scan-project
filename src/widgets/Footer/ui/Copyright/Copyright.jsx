import styles from './Copyright.module.css';

export function Copyright({children}) {
    return <p className={styles.copyright}>{children}</p>;
}
