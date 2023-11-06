import styles from './GeneralSummary.module.css';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {useGetGeneralSummary} from '../model/useGetGeneralSummary';
import {GeneralSummaryTitles} from './GeneralSummaryTitles/GeneralSummaryTitles';
import {GeneralSummaryItem} from './GeneralSummaryItem/GeneralSummaryItem';
import {GeneralSummaryHint} from './GeneralSummaryHint/GeneralSummaryHint';
import {SliderButton, Subtitle, Loader, Text} from '/src/shared';

export function GeneralSummary() {
    const [context, documentCount, searchResults] = useGetGeneralSummary();

    return (
        <section className={styles['general-summary']}>
            <Subtitle>Общая сводка</Subtitle>
            <Text mode="text_grey">
                Найдено {documentCount ? documentCount : <span style={{color: 'red'}}>0</span>} вариантов
            </Text>
            <div className={styles['general-summary__content']}>
                <GeneralSummaryTitles />
                <div className={styles['general-summary__list']}>
                    {context.loading && (
                        <div className={styles['general-summary__loader']}>
                            <Loader mode={'big'} />
                            Загружаем данные
                        </div>
                    )}
                    {!context.loading && !searchResults && <GeneralSummaryHint />}
                    {!context.loading && (
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={8}
                            navigation={{prevEl: `#button-prev-alt`, nextEl: `#button-next-alt`}}
                            scrollbar={{draggable: true}}
                            breakpoints={{
                                375: {slidesPerView: 1},
                                768: {slidesPerView: 3},
                                1340: {slidesPerView: 8},
                            }}
                        >
                            {searchResults &&
                                searchResults.map((doc) => (
                                    <SwiperSlide key={doc.date}>
                                        <GeneralSummaryItem date={doc.date} value={doc.value} risks={doc.risks} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    )}
                </div>

                <SliderButton id="button-prev-alt" mode="prev-alt" />
                <SliderButton id="button-next-alt" mode="next-alt" />
            </div>
        </section>
    );
}
