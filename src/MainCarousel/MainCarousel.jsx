import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styles from './carousel.module.css'
import { Autoplay } from 'swiper';

import 'swiper/css'

export default function MainCarousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                slidesPerView={1.2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className={styles.swiper}
                autoplay={{ delay: 10000 }}
            >
                <div className={styles.infoside}>
                    <div className={styles.cont}>
                        <p>Over 300,000 customers believe in our service.</p>
                        <button>Book Today!</button>
                    </div>
                    <div className={styles.bannericon}>
                        <img src="/img/clinic-icon1.svg" alt="" />
                    </div>
                </div>
                <SwiperSlide>
     
                <SwiperSlide>
                    <img src="/img/hospital-pic4.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>

    )
}
