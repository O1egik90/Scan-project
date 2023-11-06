import styles from './CardList.module.css';

export function CardList({children}) {
    return <ul className={styles.card__list}>{children}</ul>;
}
