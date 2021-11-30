import React from 'react';

// css
import styles from "./footerList.module.scss";

// components
import FooterItem from "./footerItem";


const FooterList = ({ item }) => {
    return (
        <div>
            <h3 className={styles.footer__list_title}>{item.title}</h3>
            <ul className={styles.footer__list}>
                {
                    item.list.map((item) => {
                        return (
                            <FooterItem item={item} key={item.id} />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FooterList;