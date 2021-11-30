import React from 'react';

// css
import styles from "../headerPanel.module.scss";


const BasketBtn = () => {
    return (
        <div className={styles.header__panel_item}>
            <button className={styles.header__panel_basket}>
                <i className="fas fa-shopping-cart"></i> Cart
            </button>
        </div>
    )
}

export default BasketBtn;