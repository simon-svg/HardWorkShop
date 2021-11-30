import React from 'react';

// css
import styles from "../topHeaderList.module.scss";


const LoginBtn = () => {
    return (
        <li className={styles.top__header_item}>
            <button className={styles.top__header_btn}>
                <i className="fas fa-sign-in-alt top__header_icon"></i>Log In
            </button>
        </li>
    )
}

export default LoginBtn;