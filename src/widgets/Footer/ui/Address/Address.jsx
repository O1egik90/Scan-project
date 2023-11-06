import styles from './Address.module.css';

export function Address({children}) {
    return <address className={styles.contacts__address}>{children}</address>;
}
