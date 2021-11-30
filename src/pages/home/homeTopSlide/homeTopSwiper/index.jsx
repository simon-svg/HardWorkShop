import React from 'react';

// css
import styles from "./homeTopSwiper.module.scss";

// components
import HomeTopSwiperItem from "./homeTopSwiperItem";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);



const HomeTopSwiper = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <HomeTopSwiperItem classBG="home__swiper_item1" subtitle="Get flat 10% Cashback" title={"exciting deals on televisions"}/>
            </SwiperSlide>
            <SwiperSlide>
                <HomeTopSwiperItem classBG="home__swiper_item2" subtitle="Top Brands lowest Prices" title={"wide range of mobile phones!"} />
            </SwiperSlide>
            <SwiperSlide>
                <HomeTopSwiperItem classBG="home__swiper_item3" subtitle="Top Sale Best Deals" title={"fresh, healthy air everywhere!"} />
            </SwiperSlide>
            <SwiperSlide>
                <HomeTopSwiperItem classBG="home__swiper_item4" subtitle="Get up to 25% off" title={"smart watches new collection"} />
            </SwiperSlide>
        </Swiper>
    );
}

export default HomeTopSwiper;