import React from 'react';

// css
import styles from "./topHeaderList.module.scss";

// components
import LoginBtn from "./logInBtn";
import RegisterBtn from "./registerBtn";


const TopHeaderList = () => {
    return (
        <ul className={styles.top__header_list}>
            <LoginBtn />
            <RegisterBtn />
        </ul>
    )
}

export default TopHeaderList;