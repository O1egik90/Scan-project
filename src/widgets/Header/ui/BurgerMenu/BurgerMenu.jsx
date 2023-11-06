import styles from './BurgerMenu.module.css';
import {useBurgerToggle} from '../../model/useBurgerToggle';

export function BurgerMenu() {
    const [burgerState, burgerToggle] = useBurgerToggle();

    return (
        <div id="burger" onClick={burgerToggle} className={`${styles.burger} ${burgerState ? styles['active'] : ''}`}>
            <span className={styles.burger__elem}></span>
        </div>
    );
}
