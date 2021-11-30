import React from 'react';

// css
import styles from "./headerFixedCont.module.scss";

// components
import HeaderCategoriesPanel from "./headerCategoriesPanel";
import HeaderNav from "./headerNav";


const HeaderFixedCont = () => {
    return (
        <div className={styles.headerFixedCont}>
            <HeaderCategoriesPanel />
            <HeaderNav />
        </div>
    )
}

export default HeaderFixedCont;