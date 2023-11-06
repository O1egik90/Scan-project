import styles from './CardText.module.css';

export function CardText({children, underline}) {
    return <p className={`${styles.card__text} ${underline && styles.underline}`}>{children}</p>;
}
