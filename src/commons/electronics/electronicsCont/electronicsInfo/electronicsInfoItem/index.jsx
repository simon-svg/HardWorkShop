import React from 'react';

// css
import styles from "./electronicsInfoItem.module.scss";


const ElectronicsInfoItem = ({ item }) => {
    return (
        <div className={styles.electronics__info_item}>
            <i className={`${item.iconClass} ${styles.electronics__info_icon}`}></i>
            <div className={styles.electronics__item_cont}>
                <h3 className={styles.electronics__item_title}>{item.name}</h3>
                <p className={styles.electronics__item_par}>{item.subtitle}</p>
            </div>
        </div>
    )
}

export default ElectronicsInfoItem;