import styles from './Button.module.css';

export function Button({mode, status, children, ...props}) {
    return (
        <button className={`${styles.btn} ${styles[mode ? mode : '']} ${[styles[status]]}`} {...props}>
            {children}
        </button>
    );
}
