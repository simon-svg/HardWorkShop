import React from 'react';

// css
import styles from "./sectionAttach.module.scss";

// commons
import Wrapper from '../wrapper';



const SectionAttach = ({children, classBG}) => {
    return (
        <section className={`${styles.section__attach} ${styles[classBG]}`}>
            <Wrapper>
                {children}
            </Wrapper>
        </section>
    )
}

export default SectionAttach;