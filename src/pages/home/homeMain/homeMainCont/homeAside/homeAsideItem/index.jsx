import React from 'react';

// css
import styles from "./homeAsideItem.module.scss";


const HomeAsideItem = (props) => {
    return (
        <ul className={styles.home__aside_item_list}>
            {
                props.item.inner.map((item1) => {
                    return (
                        <li className={styles.home__aside_item_item} key={item1.id}>
                            {
                                props.item.id !== 1 ?
                                    <div>
                                        <input type="checkbox" id={item1.for} />
                                        <label className={styles.home__aside_item_label} htmlFor={item1.for}>{item1.title}</label>
                                    </div> :
                                    <a className={styles.home__aside_item_link} href="#">{item1.title}</a>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default HomeAsideItem;