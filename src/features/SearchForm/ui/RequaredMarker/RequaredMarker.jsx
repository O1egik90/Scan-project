import styles from './RequaredMarker.module.css';

export function RequaredMarker({status}) {
    return <span className={`${styles.requared} ${status ? '' : styles.requared_error}`}>*</span>;
}
