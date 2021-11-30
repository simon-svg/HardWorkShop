import React from 'react';

// css
import styles from "./contactUsContactInner.module.scss";

// components
import ContactUscontactItem from "./contactUsContactItem";


const ContactUsContactInner = () => {
    return (
        <div className={styles.contact__contact_inner}>
            <h2 className={styles.contact__contact_title}>connect us</h2>
            <ul className={styles.contact__contact_list}>
                <ContactUscontactItem />
            </ul>
        </div>
    )
}

export default ContactUsContactInner;