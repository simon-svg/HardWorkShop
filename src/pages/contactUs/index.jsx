import React from 'react';

// css
import styles from "./contactUs.module.scss";

// commons
import SectionsTop from "../../commons/sectionsTop";
import Electronics from "../../commons/electronics";

// components
import ContactUsContact from "./contactUsContact";


const ContactUs = () => {
    return (
        <>
            <SectionsTop cname="contactBg1" title="Contact with Us" path="contact us" />
            <ContactUsContact />
            <Electronics classForBG="contact__electronics" />
        </>
    )
}

export default ContactUs;