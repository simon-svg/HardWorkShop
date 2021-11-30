import React from 'react';

// css
import styles from "./headerBotCont.module.scss";

// components
import HeaderLogo from "./headerLogo";
import HeaderSearch from "./headerSearch";
import HeaderPanel from "./headerPanel";


const HeaderBotCont = ({ handleDarkModeChange, lightIcon }) => {
    return (
        <div className={styles.headerBot__Cont}>
            <HeaderLogo />
            <HeaderSearch />
            <HeaderPanel handleDarkModeChange={handleDarkModeChange} lightIcon={lightIcon} />
        </div>
    )
}

export default HeaderBotCont;