import React from 'react';

// css
import styles from "./homeTopSwiperItemCont.module.scss";

// commons
import Button from "../../../../../../commons/button";


const HomeTopSwiperItemCont = (props) => {
    return (
        <div className={styles.home__swiper_item_cont}>
            <div className={styles.home__swiper_item_info}>
                <h3 className={styles.home__swiper_item_subtitle}>{props.subtitle}</h3>
                <h2 className={styles.home__swiper_item_title}>{props.title}</h2>
            </div>
            <Button inner="show now" btnClass="btnPrimary" />
        </div>
    )
}

export default HomeTopSwiperItemCont;