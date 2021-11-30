import React from 'react';

// css
import styles from "./aboutUsWorkCont.module.scss";

// components
import AboutWorkHead from "./aboutWorkHead";
import AboutWorkList from "./aboutWorkList";


const AboutUsWorkCont = () => {
    return (
        <div className={styles.about__workont}>
            <AboutWorkHead />
            <AboutWorkList />
        </div>
    )
}

export default AboutUsWorkCont;