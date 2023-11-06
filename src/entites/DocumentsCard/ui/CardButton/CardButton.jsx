import styles from './CardButton.module.css';

export function CardButton({children, ...props}) {
    return (
        <a {...props} className={styles.card__button} target="_blank" title="Перейти к источнику">
            {children}
        </a>
    );
}
