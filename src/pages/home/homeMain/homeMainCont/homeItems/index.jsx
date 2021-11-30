import React from 'react';

// css
import styles from "./homeItems.module.scss";

// constants 
import newProducts from "../../../../../constants/newProducts";

// components
import HomeItem from "./homeItem";


const HomeItems = () => {
    return (
        <div className={styles.home__items}>
            {
                newProducts.map((item) => {
                    return (
                        item.id > 3 ? <HomeItem key={item.id} item={item} itemClass="marginTop" /> :
                            <HomeItem key={item.id} item={item} />
                    )
                })
            }
        </div>
    )
}

export default HomeItems;