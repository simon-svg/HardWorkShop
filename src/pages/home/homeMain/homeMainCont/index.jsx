import React from 'react';

// css
import styles from "./homeMainCont.module.scss";

// components
import HomeAside from "./homeAside";
import HomeItems from "./homeItems";


const HomeMainCont = () => {
    return (
        <div className={styles.home__main_cont}>
            <HomeAside />
            <HomeItems />
        </div>
    )
}

export default HomeMainCont;