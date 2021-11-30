import React from 'react';

// css
import styles from "./customer.module.scss";

// commons
import SectionAttach from '../../../commons/sectionAttach';

// components
import CustomerCont from "./customerCont";


const Customer = () => {
    return (
        <SectionAttach classBG="customer__bg">
            <CustomerCont />
        </SectionAttach>
    )
}

export default Customer;