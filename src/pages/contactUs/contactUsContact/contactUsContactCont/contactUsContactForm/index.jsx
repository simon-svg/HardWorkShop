import React from 'react';

// css
import styles from "./contactUsContactForm.module.scss";

// commons
import Button from "../../../../../commons/button";


const ContactUsContactForm = () => {
    return (
        <div className={styles.contact__contact_form_cont}>
            <form action="#" method="POST">
                <div className={styles.contact__contact_form_inps}>
                    <input className={styles.inp} type="text" placeholder="Your Name*" name="name" />
                    <input className={styles.inp} type="email" placeholder="Your Email*" name="email" />
                    <textarea className={`${styles.inp} ${styles.textarea}`} name="message" placeholder="Type your message here*"></textarea>
                    <Button inner="send message"  btnClass="btnPrimary" />
                </div>
            </form>
        </div>
    )
}

export default ContactUsContactForm;