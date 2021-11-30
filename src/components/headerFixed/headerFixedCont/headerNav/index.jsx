import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import styles from "./headerNav.module.scss";

// constants
import navigation from "../../../../constants/navigation.js";


const HeaderNav = () => {
    return (
        <nav className={styles.header__nav}>
            <ul className={styles.header__nav_list}>
                {
                    navigation.map((item) => {
                        return (
                            <li className={styles.header__nav_item} key={item.id}>
                                <NavLink exact className={styles.header__nav_link}
                                    activeClassName={styles.header__link_active}
                                    to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default HeaderNav;