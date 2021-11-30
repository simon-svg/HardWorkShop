import React from 'react';

// css
import styles from "./headerPanel.module.scss";

// components
import LightMode from "./lightMode";
import CartStore from "./cartStoreBtn";
import BasketBtn from "./basketBtn";


const HeaderPanel = ({ handleDarkModeChange, lightIcon }) => {
    return (
        <div className={styles.header__panel}>
            <LightMode handleDarkModeChange={handleDarkModeChange} lightIcon={lightIcon} />
            <CartStore />
            <BasketBtn />
        </div>
    )
}

export default HeaderPanel;