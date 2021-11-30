import React from 'react';

// css
import styles from "./footerItem.module.scss";


const FooterItem = ({ item }) => {
    return (
        <li className={styles.footer__item}>
            <a className={styles.footer__link} href={item.href}>{item.name}</a>
        </li>
    )
}

export default FooterItem;