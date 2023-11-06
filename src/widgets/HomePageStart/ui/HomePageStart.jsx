import styles from './HomePageStart.module.css';
import {useStartSearch} from '../model/useStartSearch';
import {Title, Text, Button} from '/src/shared';
import {HomePageStartImage} from './HomePageStartImage/HomePageStartImage';

export function HomePageStart() {
    const [authCompleted, handleStartSearch] = useStartSearch();

    return (
        <section className={styles['home-page-start']}>
            <div className={styles['home-page-start__content']}>
                <Title mode="big">
                    СЕРВИС ПО ПОИСКУ <br /> ПУБЛИКАЦИЙ <br /> О КОМПАНИИ <br /> ПО ЕГО ИНН
                </Title>
                <div className={styles['home-page-start__body']}>
                    <Text mode="text">
                        Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                    </Text>
                    {authCompleted && (
                        <Button onClick={handleStartSearch} mode="home" status={!authCompleted ? 'disabled' : ''}>
                            Запросить данные
                        </Button>
                    )}
                </div>
            </div>
            <HomePageStartImage />
        </section>
    );
}
