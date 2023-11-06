import styles from './FooterLink.module.css';

export function FooterLink({children, ...props}) {
    return (
        <a {...props} onClick={(e) => e.preventDefault()} className={styles.footer__link} target="_blank">
            {children}
        </a>
    );
}
