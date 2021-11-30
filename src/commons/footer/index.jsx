import React from 'react';

// css
import styles from "./footer.module.scss";

// commons
import Wrapper from "../wrapper";
import FooterCont from "./footerCont";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Wrapper>
                <FooterCont />
            </Wrapper>
        </footer>
    )
}

export default Footer;