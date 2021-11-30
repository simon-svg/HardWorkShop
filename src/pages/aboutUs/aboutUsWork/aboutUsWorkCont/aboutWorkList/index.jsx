import React from 'react';

// css
import styles from "./aboutWorkList.module.scss";

// commons
import Button from '../../../../../commons/button';


const AboutWorkList = () => {
    return (
        <ul className={styles.about__work_list}>
            <li className={styles.about__work_item}>
                <i className="fas fa-check-square"></i>
                <p className={styles.about__work_item_inner}>Ut enim ad minim veniam</p>
            </li>
            <li className={styles.about__work_item}>
                <i className="fas fa-check-square"></i>
                <p className={styles.about__work_item_inner}>Quis nostrud exercitation ullamco laboris</p>
            </li>
            <li className={styles.about__work_item}>
                <i className="fas fa-check-square"></i>
                <p className={styles.about__work_item_inner}>Nisi ut aliquip ex ea commodo consequat</p>
            </li>
            <li className={styles.about__work_item}>
                <a href="/">
                    <Button inner="view our products"  btnClass="btnPrimary" />
                </a>
            </li>
        </ul>
    )
}

export default AboutWorkList;