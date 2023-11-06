import styles from './MenuLink.module.css';

export function MenuLink({children, mode, ...props}) {
    return (
        <li className={styles.menu__item}>
            <a {...props} className={`${styles.menu__link} ${styles[mode ?? '']}`}>
                {children}
            </a>
        </li>
    );
}
