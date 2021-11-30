import React from 'react';

// css
import styles from "./contactUsContactItem.module.scss";

// constants
import contacts from "../../../../../../constants/Contacts";


const ContactUscontactItem = () => {
    return (
        contacts.map((item) => {
            return (
                <li className={styles.contact__contact_item} key={item.id}>
                    <i className={item.iconClass}></i>
                    <div className={styles.contact__contact_item_head}>
                        <h3 className={styles.contact__contact_item_title}>{item.title}</h3>
                        <span className={styles.contact__contact_item_info}>{item.info}</span>
                    </div>
                </li>
            )
        })

    )
}

export default ContactUscontactItem;