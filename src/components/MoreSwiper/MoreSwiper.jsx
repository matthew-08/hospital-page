import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './moreswiper.module.css'
import SwiperCard from './SwiperCard'

export default function MoreSwiper() {
    return (
        <div className={styles.swipercontainer}>
            <Swiper
                spaceBetween={30}
                slidesPerView={3.3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.swiper}
            >
                <SwiperSlide
                    className={styles.swiperslide}
                >
                    <SwiperCard
                        title={"Home Services"}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={styles.swiperslide}>
                    <SwiperCard
                        title={"Pharmacy"}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={styles.swiperslide}>
                    <SwiperCard
                        title={"Find a Doctor "}
                    />
                </SwiperSlide>
                <SwiperSlide
                    className={styles.swiperslide}>
                    <SwiperCard
                        title={"Our health packages"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
