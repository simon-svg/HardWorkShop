import React from 'react';

// css
import styles from "./homeItem.module.scss";

// commons
import Button from '../../../../../../commons/button';


const HomeItem = ({ itemClass, item }) => {
    return (
        <div className={`${styles.home__item} ${styles[itemClass]}`}>
            <div className={styles.home__item_info}>
                <a className={styles.home__item_link} href="item/id=2">
                    <img className={styles.home__item_img} src={item.img} alt={item.name} />
                    <button className={styles.home__item_link_btn}>quick view</button>
                </a>
                <a className={styles.home__item_name} href="item/id=2">{item.name}</a>
                <div className={styles.home__item_prices}>
                    <span className={styles.home__item_discPrice}>{item.discountPrice}</span>
                    <span className={styles.home__item_price}>{item.price}</span>
                </div>
            </div>
            <Button inner="add to cart" btnClass="btnSecondary" />
        </div>
    )
}

export default HomeItem;