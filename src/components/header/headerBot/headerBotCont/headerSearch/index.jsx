import React from 'react';

// css
import styles from "./headerSearch.module.scss";


const HeaderSearch = () => {
    return (
        <div className={styles.header__search}>
            <form className={styles.header__search_form} action="#" method="POST">
                <input className={styles.header__search_input} type="text" placeholder="Search for products, brands and more" />
                <button className={styles.header__search_btn}>
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default HeaderSearch;