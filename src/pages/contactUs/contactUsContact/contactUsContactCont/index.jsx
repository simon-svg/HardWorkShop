import React from 'react';

// css
import styles from "./contactUsContactCont.module.scss";

// components
import ContactUsContactInner from './contactUsContactInner';
import ContactUsContactForm from "./contactUsContactForm";


const ContactUsContactCont = () => {
    return (
        <div className={styles.contact__contact_cont}>
            <ContactUsContactInner />
            <ContactUsContactForm />
        </div>
    )
}

export default ContactUsContactCont;