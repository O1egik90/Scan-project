import styles from './Rates.module.css';
import {rateCardsData} from '../constants/rateCardsData';
import {useGetCurrentRate} from '../model/useGetCurrentRate';
import {Subtitle} from '/src/shared';
import {RateCard} from '/src/entites/RateCard';

export function Rates() {
    const currentRate = useGetCurrentRate();

    return (
        <section id="rates" className={styles.rates}>
            <Subtitle mode="big-alt">Наши тарифы</Subtitle>
            <div className={styles['rates-cards']}>
                {rateCardsData.length > 0 &&
                    rateCardsData.map((rateCard) => (
                        <RateCard card={rateCard} currentRate={currentRate} key={rateCard.currentRate} />
                    ))}
            </div>
        </section>
    );
}
