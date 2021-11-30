import React from 'react';

// css
import styles from "./customerCont.module.scss";

// components
import CostumerHead from "./customerHead";
import CustomerItems from "./csutomerItems";


const CustomerCont = () => {
    return (
        <div className={styles.customer__cont}>
            <CostumerHead />
            <CustomerItems />
        </div>
    )
}

export default CustomerCont;