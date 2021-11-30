import React from 'react';

// css
import styles from "./headerFixed.module.scss";

// components
import HeaderFixedCont from "./headerFixedCont";

// commons
import Wrapper from '../../commons/wrapper';


const HeaderFixed = () => {
    return (
        <div className={styles.header__fixed}>
            <Wrapper>
                <HeaderFixedCont />
            </Wrapper>
        </div>
    )
}

export default HeaderFixed;