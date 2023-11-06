import styles from './Search.module.css';
import {Title, Text} from '/src/shared';
import {SearchImage} from './SearchImage/SearchImage';
import {SearchImages} from './SearchImages/SearchImages';
import {SearchForm} from '/src/features/SearchForm';

export function Search() {
    return (
        <main className="content">
            <section className={styles.search}>
                <div className={styles.search__description}>
                    <div className={styles.search__text}>
                        <Title mode="medium-spacing">Найдите необходимые данные в пару кликов.</Title>
                        <Text mode="text">
                            Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск
                        </Text>
                    </div>
                    <SearchImages />
                </div>
                <div className={styles.search__content}>
                    <SearchForm />
                    <SearchImage />
                </div>
            </section>
        </main>
    );
}
