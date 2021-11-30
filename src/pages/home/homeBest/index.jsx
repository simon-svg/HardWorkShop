import React from 'react';

// css
import styles from "./homeBest.module.scss";

// commons
import SectionAttach from "../../../commons/sectionAttach";

// components
import HomeBestCont from "./homeBestCont";


const HomeBest = () => {
    return (
        <SectionAttach classBG="home__best">
            <HomeBestCont />
        </SectionAttach>
    )
}

export default HomeBest;