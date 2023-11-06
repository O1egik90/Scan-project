import styles from './SearchOutputImage.module.css';
import {AdaptiveImage} from '/src/shared';

export function SearchOutputImage() {
    return (
        <div className={styles['search-output__image']}>
            <AdaptiveImage src="./search-output-image.svg" alt="search-result" />
        </div>
    );
}
