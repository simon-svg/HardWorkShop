import React from 'react';

// css
import styles from "../topHeaderList.module.scss";


const RegisterBtn = () => {
    return (
        <li className={styles.top__header_item}>
            <button className={styles.top__header_btn}>
                <i className="fas fa-sign-out-alt top__header_icon"></i>Register
            </button>
        </li>
    )
}

export default RegisterBtn;