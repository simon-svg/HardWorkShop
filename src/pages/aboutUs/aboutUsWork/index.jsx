import React from 'react';

// css
import styles from "./aboutUsWork.module.scss";

// commons
import Wrapper from "../../../commons/wrapper";

// components
import AboutUsWorkCont from "./aboutUsWorkCont";


const AboutUsWork = () => {
    return (
        <div className={styles.aboute__work}>
            <Wrapper>
                <AboutUsWorkCont />
            </Wrapper>
        </div>
    )
}

export default AboutUsWork;