import React from 'react';

// css
import styles from "./customerItems.module.scss";

// constants
import customers from "../../../../../constants/customers";

// components
import CustomerItem from "./customerItem";


const CustomerItems = () => {
    return (
        <div className={styles.customer__items}>
            {
                customers.map((item) => {
                    return (
                        <CustomerItem key={item.id} name={item.name} txt={item.txt} img={item.img} info={item.info} />
                    )
                })
            }
        </div>
    )
}

export default CustomerItems;