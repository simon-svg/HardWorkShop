import React from 'react';

// css
import styles from "./customerHead.module.scss";

const CostumerHead = () => {
    return (
        <div className={styles.costumer__head}>
            <h2 className={styles.customer__title}>Our <span className={styles.customer__title_bold}>Customer</span> Says</h2>
            <p className={styles.customer__par}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque, eaque ipsa quae ab illo inventore.</p>
        </div>
    )
}

export default CostumerHead;