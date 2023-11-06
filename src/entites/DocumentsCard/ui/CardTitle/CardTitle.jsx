import styles from './CardTitle.module.css';

export function CardTitle({children}) {
    return <h3 className={styles.card__title}>{children}</h3>;
}
