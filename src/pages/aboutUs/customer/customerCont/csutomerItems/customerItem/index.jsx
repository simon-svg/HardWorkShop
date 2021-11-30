import React from 'react';

// css
import styles from "./customerItem.module.scss";


const CustomerItem = ({ info, img, txt, name }) => {
    return (
        <div className={styles.customer__item}>
            <p className={styles.customer__par}>
                <q className={styles.customer__quotation}>{txt}</q>
            </p>
            <div className={styles.customer__item_inner}>
                <div className={styles.customer__item_img_cont}>
                    <div className={styles.customer__item_img}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={styles.customer__item_info}>
                        <h4 className={styles.customer__item_name}>{name}</h4>
                        <span className={styles.customer__item_subtitle}>{info}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerItem;