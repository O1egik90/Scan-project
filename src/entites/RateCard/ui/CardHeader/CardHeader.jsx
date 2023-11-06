import styles from './CardHeader.module.css';
import {Text} from '/src/shared';
import {CardTitle} from '../CardTitle/CardTitle';

export function CardHeader({mode, bg, title, text, children}) {
    return (
        <div className={`${styles.card__header} ${styles[bg]}`}>
            <div className={styles['card__header-content']}>
                <CardTitle mode={mode}>{title}</CardTitle>
                <Text mode="medium">{text}</Text>
            </div>
            {children}
        </div>
    );
}
