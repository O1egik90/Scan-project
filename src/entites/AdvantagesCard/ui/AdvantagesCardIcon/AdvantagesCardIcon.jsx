import styles from './AdvantagesCardIcon.module.css';

export function AdvantagesCardIcon({...props}) {
    return (
        <div className={styles['advantages-card__icon']}>
            <img {...props} />
        </div>
    );
}
