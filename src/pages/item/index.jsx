import React from 'react';

// css
import styles from "./item.module.scss";

// commons
import SectionsTop from '../../commons/sectionsTop';
import Electronics from "../../commons/electronics";

// components
import HomeBest from "../home/homeBest";
import ItemInfo from "./itemInfo";


const Item = () => {
    return (
        <>
            <SectionsTop cname="itemBg1" title="Item" path="item" />
            <ItemInfo />
            <HomeBest />
            <Electronics />
        </>
    )
}

export default Item;