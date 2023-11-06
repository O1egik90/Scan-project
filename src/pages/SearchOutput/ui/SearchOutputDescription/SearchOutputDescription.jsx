import styles from './SearchOutputDescription.module.css';
import {Title, Text} from '/src/shared';
import {SearchOutputImage} from '../SearchOutputImage/SearchOutputImage';

export function SearchOutputDescription() {
    return (
        <section className={styles['description']}>
            <div className={styles['description__content']}>
                <div className={styles['description__body']}>
                    <Title mode="big-spacing">
                        Ищем. Скоро <br /> будут результаты
                    </Title>
                    <Text mode="text">
                        Поиск может занять некоторое время, <br className={styles['line-break']} /> просим сохранять
                        терпение.
                    </Text>
                </div>
                <SearchOutputImage />
            </div>
        </section>
    );
}
