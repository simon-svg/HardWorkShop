import React from 'react';

// css
import styles from "../headerPanel.module.scss";


const LightMode = ({ handleDarkModeChange, lightIcon }) => {
    return (
        <div className={styles.header__panel_item} onClick={handleDarkModeChange}>
            <i className={lightIcon ? "far fa-moon" : "far fa-sun"}></i>
        </div>
    )
}

export default LightMode;