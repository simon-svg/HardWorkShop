import React from 'react';

// css
import styles from "./electronicsCont.module.scss";

// components
import ElectronicsHead from "./electronicsHead";
import ElectronicsInfo from "./electronicsInfo";


const ElectronicsCont = () => {
    return (
        <div className={styles.electronics__cont}>
            <ElectronicsHead />
            <ElectronicsInfo />
        </div>
    )
}

export default ElectronicsCont;