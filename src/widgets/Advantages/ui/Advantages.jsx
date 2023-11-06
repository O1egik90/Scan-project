import styles from './Advantages.module.css';
import 'swiper/css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {advantagesData} from '../constants/advantagesData';
import {Subtitle, SliderButton} from '/src/shared';
import {AdvantagesCard} from '/src/entites/AdvantagesCard';
import {AdvantagesImage} from './AdvantagesImage/AdvantagesImage';

export function Advantages() {
    return (
        <section className={styles.advantages}>
            <Subtitle mode="big">Почему {<br className={styles.mobile} />} именно мы</Subtitle>
            <div className={styles.advantages__list}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{nextEl: '#button-next', prevEl: '#button-prev'}}
                    loop={true}
                    scrollbar={{draggable: true}}
                    breakpoints={{375: {slidesPerView: 1}, 768: {slidesPerView: 2}, 1100: {slidesPerView: 3}}}
                    autoHeight={'true'}
                >
                    {advantagesData.length > 0 &&
                        advantagesData.map((card) => (
                            <SwiperSlide key={card.id}>
                                <AdvantagesCard src={card.src} alt={card.alt} text={card.text} />
                            </SwiperSlide>
                        ))}
                </Swiper>
                <SliderButton id="button-prev" mode="prev" />
                <SliderButton id="button-next" mode="next" />
            </div>
            <AdvantagesImage />
        </section>
    );
}
