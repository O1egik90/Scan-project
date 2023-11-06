import styles from './CardImage.module.css';
import {AdaptiveImage} from '/src/shared';

export function CardImage({...props}) {
    return (
        <div data="document-image" className={styles.card__image}>
            <AdaptiveImage {...props} />
        </div>
    );
}
