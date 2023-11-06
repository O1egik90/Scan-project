import styles from './Header.module.css';
import {useHeaderNavigation} from '../model/useHeaderNavigation';
import {Profile} from './Profile/Profile';
import {AuthMenu} from './AuthMenu/AuthMenu';
import {BurgerMenu} from './BurgerMenu/BurgerMenu';
import {Logo} from '/src/shared';
import {MenuLink} from './MenuLink/MenuLink';
import {InfoPanel} from './InfoPanel/InfoPanel';

export function Header() {
    const [context, handleLogo, handleMenuLink, getLogoImagePath] = useHeaderNavigation();

    return (
        <header className={styles.header}>
            <Logo onClick={(e) => handleLogo(e)} href="/" src={getLogoImagePath()} />
            <div className={`${styles.menu} ${context.burgerActive ? styles['menu_active'] : ''}`}>
                <nav className={styles.navigation}>
                    <ul className={`${styles.links} ${context.authCompleted && styles['no-margin']}`}>
                        <MenuLink onClick={(e) => handleMenuLink(e)} href="#home">
                            Главная
                        </MenuLink>
                        <MenuLink onClick={(e) => handleMenuLink(e)} href="#rates">
                            Тарифы
                        </MenuLink>
                        <MenuLink mode="disabled" href="#">
                            FAQ
                        </MenuLink>
                    </ul>
                </nav>
                {context.authCompleted ? <Profile /> : <AuthMenu />}
            </div>
            {context.authCompleted && <InfoPanel />}
            <BurgerMenu />
        </header>
    );
}
