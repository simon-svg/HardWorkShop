import React from 'react';

// css
import styles from "./aboutUs.module.scss";

// commons
import SectionsTop from "../../commons/sectionsTop";
import Electronics from "../../commons/electronics";

// components
import AboutUsWork from "./aboutUsWork";
import Customer from "./customer";


const AboutUs = () => {
    return (
        <>
            <SectionsTop cname="abouteBg1" title="Few Words about Us" path="about us" />
            <AboutUsWork />
            <Customer />
            <Electronics />
        </>
    )
}

export default AboutUs;