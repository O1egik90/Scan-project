import styles from './Footer.module.css';
import {useNavigate} from 'react-router-dom';
import {getCurrentYear} from '../lib/getCurrentYear';
import {smoothLink} from '/src/app/lib/smoothLink';
import {Logo} from '/src/shared';
import {Address} from './Address/Address';
import {FooterLink} from './FooterLink/FooterLink';
import {Copyright} from './Copyright/Copyright';

export function Footer() {
    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <Logo
                href="#home"
                onClick={(e) => {
                    smoothLink(e);
                    navigate('/');
                }}
                src="./footer-logo.svg"
            />
            <div className={styles.body}>
                <div className={styles.contacts}>
                    <Address>г. Москва, Цветной б-р, 40</Address>
                    <FooterLink href="tel:+74957712111">+7 495 771 21 11</FooterLink>
                    <br />
                    <FooterLink href="mailto:info@skan.ru">info@skan.ru</FooterLink>
                </div>
                <Copyright>Copyright by Khudushin Oleg, {getCurrentYear()}</Copyright>
            </div>
        </footer>
    );
}
