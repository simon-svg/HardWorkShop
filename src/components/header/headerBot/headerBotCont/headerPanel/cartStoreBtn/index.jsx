import React from 'react';

// css
import styles from "../headerPanel.module.scss";


const CartStore = () => {
    return (
        <div className={styles.header__panel_item}>
            <i className="far fa-heart"></i>
        </div>
    )
}

export default CartStore;