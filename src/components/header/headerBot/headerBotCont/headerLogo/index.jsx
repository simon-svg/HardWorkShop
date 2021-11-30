import React from 'react';

// css
import styles from "./headerLogo.module.scss";

// logo
import logo from "../../../../../media/img/logo/hardWork/logo.png";


const HeaderLogo = () => {
    return (
        <div className={styles.header__logo}>
            <a href="/">
                <img className={styles.header__logo_img} src={logo} alt="sagam" />
            </a>
        </div>
    )
}

export default HeaderLogo;