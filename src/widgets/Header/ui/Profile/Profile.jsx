import styles from './Profile.module.css';
import {useLogout} from '../../model/useLogout';

export function Profile() {
    const handleLogout = useLogout();

    return (
        <div className={styles.profile}>
            <div className={styles.container}>
                <p className={styles['user-name']}>\Олег Х.</p>
                <button onClick={handleLogout} className={styles['logout-btn']}>
                    Выйти
                </button>
            </div>
            <div className={styles.avatar}>
                <img src="./avatar.jpg" alt="avatar" />
            </div>
        </div>
    );
}
