import React from 'react';

// css
import styles from "./contactUsContact.module.scss";

// commons
import Wrapper from "../../../commons/wrapper";

// components
import ContactUsContactCont from "./contactUsContactCont";


const ContactUsContact = () => {
    return (
        <section className={styles.contact__contact}>
            <Wrapper>
                <ContactUsContactCont />
            </Wrapper>
        </section>
    )
}

export default ContactUsContact;