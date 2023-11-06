import styles from './SocialLink.module.css';

export function SocialLink(props) {
    return (
        <a {...props} className={styles.social__link}>
            <img {...props} />
        </a>
    );
}
