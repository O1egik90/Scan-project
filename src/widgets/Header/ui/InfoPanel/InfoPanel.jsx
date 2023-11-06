import styles from './InfoPanel.module.css';
import {useInfoPanel} from '../../model/useInfoPanel';
import {Loader} from '/src/shared';

export function InfoPanel({...props}) {
    const [headerLoading, count, limit] = useInfoPanel();
    return (
        <aside {...props} className={`${styles['info-panel']}`}>
            {headerLoading ? (
                <Loader />
            ) : (
                <>
                    <p className={styles['info-panel__row']}>
                        <span className={styles.description}>Использовано компаний</span>
                        <span className={styles.count}>{count}</span>
                    </p>
                    <p className={styles['info-panel__row']}>
                        <span className={styles.description}>Лимит по компаниям</span>
                        <span className={styles.limit}>{limit}</span>
                    </p>
                </>
            )}
        </aside>
    );
}
