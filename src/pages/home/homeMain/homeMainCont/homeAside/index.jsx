import React from 'react';

// css
import styles from "./homeAside.module.scss";

// constantas
import homeAside from "../../../../../constants/homeAside";

// components
import HomeAsideItem from "./homeAsideItem";


const HomeAside = () => {
    return (
        <div className={styles.home__aside}>
            {
                homeAside.map((item) => {
                    return (
                        <ul className={styles.home__aside_list} key={item.id}>
                            <li className={styles.home__aside_item}>
                                <h3 className={styles.home__aside_item_title}>{item.title}</h3>
                            </li>
                            <HomeAsideItem item={item} />
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default HomeAside;