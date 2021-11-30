import React from 'react';

// css
import styles from "./headerCategoriesPanel.module.scss";


const HeaderCategoriesPanel = () => {
    return (
        <div className={styles.header__categories_panel}>
            <form action="#" method="POST">
                <select className={styles.categories__select} name="categories">
                    <option className={styles.categories__select_item} value="all">All Categories</option>
                    <option className={styles.categories__select_item} value="accessories">Accessories</option>
                    <option className={styles.categories__select_item} value="electronics">Electronics</option>
                    <option className={styles.categories__select_item} value="computers">Computers</option>
                    <option className={styles.categories__select_item} value="mobiles">Mobiles</option>
                </select>
            </form>
        </div>
    )
}

export default HeaderCategoriesPanel;