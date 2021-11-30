import React from 'react';

// css
import styles from "./button.module.scss";


const Button = (props) => {
    return (
        <button className={`${styles.button} ${styles[props.btnClass]}`}>{props.inner}</button>
    )
}

export default Button;