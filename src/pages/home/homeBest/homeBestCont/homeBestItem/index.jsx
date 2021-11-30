import React from 'react';

// css
import styles from "./homeBestItem.module.scss";


const HomeBestItem = ({ title, subtitle, info, img }) => {
    return (
        <div className={styles.home__best_item}>
            <div className={styles.home__best_item_inner}>
                <span className={styles.home__best_item_subtitle}>{subtitle}</span>
                <a className={styles.home__best_item_title} href="#">{title}</a>
                <span className={styles.home__best_item_info}>{info}</span>
            </div>
            <div className={styles.home__best_item_img}>
                <a href="#">
                    <img src={img} alt={title} />
                </a>
            </div>
        </div>
    )
}

export default HomeBestItem;