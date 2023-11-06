import styles from './Logo.module.css';

export function Logo({burgerStatus, ...props}) {
    return (
        <div {...props} className={styles.logo}>
            <a {...props}>
                <img className={styles.logo__image} alt="logo" {...props} />
            </a>
        </div>
    );
}
