import React from 'react';

// css
import styles from "./homeMainHead.module.scss";


const HomeMainHead = () => {
    return (
        <div className={styles.home__main_head}>
            <h2 className={styles.home__main_title}>Our <span className={styles.home__main_title_bold}>New Products</span></h2>
        </div>
    )
}

export default HomeMainHead;