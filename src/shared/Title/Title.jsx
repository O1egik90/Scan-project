import styles from './Title.module.css';

export function Title({mode, children}) {
    return <h1 className={`${styles.title} ${styles[mode]}`}>{children}</h1>;
}
