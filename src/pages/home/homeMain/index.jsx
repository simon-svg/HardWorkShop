import React from 'react';

// css
import styles from "./homeMain.module.scss";

// commons
import Wrapper from "../../../commons/wrapper";

// components
import HomeMainCont from "./homeMainCont";
import HomeMainHead from "./homeMainHead";


const HomeMain = () => {
    return (
        <section className={styles.home__main}>
            <HomeMainHead />
            <Wrapper>
                <HomeMainCont />
            </Wrapper>
        </section>
    )
}

export default HomeMain;