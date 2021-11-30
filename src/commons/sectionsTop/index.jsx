import React from 'react';

// css
import styles from "./sectionsTop.module.scss";

// commons
import Wrapper from "../wrapper";
import SectionsTopCont from "../sectionsTop/sectionsTopCont";


const SectionsTop = (props) => {
    return (
        <section className={`${styles.sections__top} ${styles[props.cname]}`}>
            <Wrapper>
                <SectionsTopCont title={props.title} path={props.path} />
            </Wrapper>
        </section>
    )
}

export default SectionsTop;