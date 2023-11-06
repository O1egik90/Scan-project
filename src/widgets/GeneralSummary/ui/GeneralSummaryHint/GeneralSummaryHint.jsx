import styles from './GeneralSummaryHint.module.css';
import {useNavigate} from 'react-router-dom';

export function GeneralSummaryHint() {
    const navigate = useNavigate();
    return (
        <div className={styles['general-summary__hint']}>
            <p>К сожалению поиск не дал результатов, попробуйте изменить параметры поиска</p>
            <button className={styles['general-summary__hint-button']} onClick={() => navigate('/search')}></button>
        </div>
    );
}
