import React from 'react';

// css
import styles from "./electronicsHead.module.scss";


const ElectronicsHead = () => {
    return (
        <div className={styles.electronics__head}>
            <h2 className={styles.electronics__title}>electronics:</h2>
            <p className={styles.electronics__par}>If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.
            </p>
        </div>
    )
}

export default ElectronicsHead;