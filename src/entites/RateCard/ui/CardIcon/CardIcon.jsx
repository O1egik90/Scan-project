import styles from './CardIcon.module.css';

export function CardIcon({type, ...props}) {
    return (
        <div className={`${styles['card__icon']} ${styles[type]}`}>
            <img {...props} />
        </div>
    );
}
