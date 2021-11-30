import React from 'react';

// css
import styles from "./electronicsInfo.module.scss";

// constants
import aboutUsElectronics from '../../../../constants/aboutUsElectronics';

// components
import ElectronicsInfoItem from "./electronicsInfoItem";


const ElectronicsInfo = () => {
    return (
        <div className={styles.electronics__info}>
            {
                aboutUsElectronics.map((item) => {
                    return (
                        <ElectronicsInfoItem item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default ElectronicsInfo;