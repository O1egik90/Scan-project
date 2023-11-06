import styles from './DocumentsCard.module.css';
import {CardText} from './CardText/CardText';
import {CardTitle} from './CardTitle/CardTitle';
import {CardСategory} from './CardCategory/CardСategory';
import {CardImage} from './CardImage/CardImage';
import {CardTextBlock} from './CardTextBlock/CardTextBlock';
import {CardButton} from './CardButton/CardButton';
import {formatDate} from '/src/app/lib/formatDate';
import {getCategory} from '../lib/getCategory';
import {xmlParser} from '../lib/xmlParser';

export function DocumentsCard({data}) {
    return (
        <div className={styles['documents__card']}>
            <div className={styles.card__header}>
                <div className={styles.card__info}>
                    <CardText>{formatDate(data.issueDate)}</CardText>
                    <CardText underline={true}>{data.source.name}</CardText>
                </div>
                <CardTitle>{data.title.text}</CardTitle>
                <CardСategory>{getCategory(data)}</CardСategory>
            </div>
            <div className={styles.card__body}>
                <CardImage src="./search-output-card.svg" />
                <CardTextBlock document={xmlParser(data.content.markup)}></CardTextBlock>
            </div>
            <div className={styles.card__footer}>
                <CardButton onClick={(e) => data.url === '' && e.target.preventDefault()} href={data.url}>
                    Читать в источнике
                </CardButton>
                <CardText>{data.attributes.wordCount} слова</CardText>
            </div>
        </div>
    );
}
