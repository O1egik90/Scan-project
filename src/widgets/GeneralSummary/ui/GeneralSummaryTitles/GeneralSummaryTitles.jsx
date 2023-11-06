import styles from './GeneralSummaryTitles.module.css';

export function GeneralSummaryTitles() {
    return (
        <div className={styles['general-summary__titles']}>
            <h3 className={styles['general-summary__title']}>Период</h3>
            <h3 className={styles['general-summary__title']}>Всего</h3>
            <h3 className={styles['general-summary__title']}>Риски</h3>
        </div>
    );
}
