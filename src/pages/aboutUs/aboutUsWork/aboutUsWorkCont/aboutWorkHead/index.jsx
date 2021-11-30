import React from 'react';

// css
import styles from "./aboutWorkHead.module.scss";

const AboutWorkHead = () => {
    return (
        <div className={styles.about__work_head}>
            <h2 className={styles.about__work_title}>
                <span className={styles.about__work_title_bold}>We Work</span> for your best Success
            </h2>
            <p className={styles.about__work_subtitle}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quas ea eius ipsam officiis facere impedit! Quidem rerum vitae, excepturi
            </p>
        </div>
    )
}

export default AboutWorkHead;