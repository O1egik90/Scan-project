import styles from './CardListItem.module.css';

export function CardListItem({children}) {
    return <li className={styles['card__list-item']}>{children}</li>;
}
