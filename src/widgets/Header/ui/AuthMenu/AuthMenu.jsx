import styles from './AuthMenu.module.css';
import {useLogin} from '../../model/useLogin';

export function AuthMenu() {
    const handleAuth = useLogin();

    return (
        <div className={styles['auth-menu']}>
            <a className={styles['auth-menu__link_disable']} href="#">
                Зарегистрироваться
            </a>
            <span className={styles.delim}>|</span>
            <button onClick={handleAuth} className={styles['auth-menu__btn']}>
                Войти
            </button>
        </div>
    );
}
