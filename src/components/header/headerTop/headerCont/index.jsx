import React from 'react';

// css
import styles from "./headerCont.module.scss";

// components
import Welcome from "./welcome";
import TopHeaderList from "./topHeaderList";

const HeaderCont = () => {
    return(
        <div className={styles.header__cont}>
            <Welcome />
            <TopHeaderList />
        </div>
    )
}

export default HeaderCont;