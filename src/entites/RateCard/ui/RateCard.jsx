import styles from './RateCard.module.css';
import {CardHeader} from './CardHeader/CardHeader';
import {CardIcon} from './CardIcon/CardIcon';
import {CurrentRate} from './CurrentRate/CurrentRate';
import {CardPrices} from './CardPrices/CardPrices';
import {CardListTitle} from './CardListTitle/CardListTitle';
import {CardList} from './CardList/CardList';
import {CardListItem} from './CardListItem/CardListItem';
import {Button} from '/src/shared';

export function RateCard({card, currentRate}) {
    return (
        <div className={`${styles.card} ${currentRate === card.currentRate && styles[card.border]}`}>
            <CardHeader mode={card.mode} bg={card.bgColor} title={card.currentRate} text={card.headerText}>
                <CardIcon type={card.iconType} src={card.iconPath} alt={card.iconType} />
            </CardHeader>
            <div className={styles['rate-card__body']}>
                {currentRate === card.currentRate && <CurrentRate />}
                <CardPrices current={card.current} prev={card.prev}>
                    {card.creditConditions}
                </CardPrices>
                <CardListTitle />
                <CardList>
                    <CardListItem>{card.cardList[0]}</CardListItem>
                    <CardListItem>{card.cardList[1]}</CardListItem>
                    <CardListItem>{card.cardList[2]}</CardListItem>
                </CardList>
                <Button mode={currentRate === card.currentRate ? 'card_grey' : 'card'} status={'disabled'}>
                    {currentRate === card.currentRate ? 'Перейти в личный кабинет' : 'Подробнее'}
                </Button>
            </div>
        </div>
    );
}
