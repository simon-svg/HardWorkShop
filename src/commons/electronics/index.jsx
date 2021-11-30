import React from 'react';

// css
import styles from "./electronics.module.scss";

// commons
import Wrapper from '../wrapper';

// components
import ElectronicsCont from "./electronicsCont";


const Electronics = ({ classForBG }) => {
    return (
        <section className={`${styles.electronics} ${styles[classForBG]}`}>
            <Wrapper>
                <ElectronicsCont />
            </Wrapper>
        </section>
    )
}

export default Electronics;