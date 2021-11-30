import React from 'react';

// css
import styles from "./homeTopSwiperItem.module.scss";

// commons
import Wrapper from "../../../../../commons/wrapper";

// components
import HomeTopSwiperItemCont from "./homeTopSwiperItemCont";


const HomeTopSwiperItem = (props) => {
    return (
        <div className={`${styles.home__swiper_item} ${styles[props.classBG]}`}>
            <Wrapper>
                <HomeTopSwiperItemCont subtitle={props.subtitle} title={props.title} />
            </Wrapper>
        </div>
    )
}

export default HomeTopSwiperItem;