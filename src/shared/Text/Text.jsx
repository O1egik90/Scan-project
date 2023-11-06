import styles from './Text.module.css';

export function Text({mode, children}) {
    return <p className={`${styles[mode]}`}>{children}</p>;
}
