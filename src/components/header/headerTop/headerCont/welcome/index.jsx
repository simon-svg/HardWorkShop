import React from 'react';

// css
import styles from "./welcome.module.scss";

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <h3 className={styles.welcome__inner}>Welcome to our shop!</h3>
        </div>
    )
}

export default Welcome;