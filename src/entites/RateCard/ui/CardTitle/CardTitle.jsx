import styles from './CardTitle.module.css';

export function CardTitle({children, mode}) {
    return <h3 className={`${styles.card__title} ${styles[mode]}`}>{children}</h3>;
}
