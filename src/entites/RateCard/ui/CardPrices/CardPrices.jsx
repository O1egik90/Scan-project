import styles from './CardPrices.module.css';
import {Text} from '/src/shared';
import {CardTitle} from '../CardTitle/CardTitle';

export function CardPrices({children, current, prev}) {
    return (
        <div className={styles.card__prices}>
            <CardTitle>
                <span>{current}</span>
                <span className={styles['card__prev-price']}>{prev}</span>
            </CardTitle>
            <Text mode="medium">{children}</Text>
        </div>
    );
}
