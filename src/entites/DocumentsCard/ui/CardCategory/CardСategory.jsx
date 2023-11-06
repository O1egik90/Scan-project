import styles from './CardСategory.module.css';

export function CardСategory({children}) {
    return <p className={styles.card__category}>{children}</p>;
}
