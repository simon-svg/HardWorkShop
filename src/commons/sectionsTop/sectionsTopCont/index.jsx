import React from 'react';

// css
import styles from "./sectionsTopCont.module.scss";


const SectionsTopCont = (props) => {
    return (
        <div className={styles.sections__top_cont}>
            <h2 className={styles.sections__top_title}>{props.title}</h2>
            <ul className={styles.sections__top_path_list}>
                <li className={styles.sections__top_path_item}>
                    <a className={styles.sections__top_path_link} href="/">home</a>
                    <i className="fa fa-angle-right"></i>
                </li>
                <li className={styles.sections__top_path_item}>
                    <span className={styles.sections__top_path_current} href="/">{props.path}</span>
                </li>
            </ul>
        </div>
    )
}

export default SectionsTopCont;