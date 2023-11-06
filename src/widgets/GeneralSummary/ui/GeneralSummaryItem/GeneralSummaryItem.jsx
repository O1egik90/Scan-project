import styles from './GeneralSummaryItem.module.css';

export function GeneralSummaryItem({date, value, risks}) {
    return (
        <div className={styles['general-summary__item']}>
            <span>{date}</span>
            <span>{value}</span>
            <span>{risks}</span>
        </div>
    );
}
