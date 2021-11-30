import React from 'react';

// css
import styles from "./header.module.scss";

// components
import HeaderTop from "./headerTop";
import HeaderBot from "./headerBot";

const Header = ({ handleDarkModeChange, lightIcon }) => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderBot handleDarkModeChange={handleDarkModeChange} lightIcon={lightIcon} />
        </header>
    )
}

export default Header;