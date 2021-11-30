import React from 'react';

// css
import styles from "./header.module.scss";

// components
import HeaderCont from './headerCont';

// commons
import Wrapper from "../../../commons/wrapper";


const HeaderTop = () => {
    return (
        <div className={styles.header__top}>
            <Wrapper>
                <HeaderCont />
            </Wrapper>
        </div>
    )
}

export default HeaderTop;