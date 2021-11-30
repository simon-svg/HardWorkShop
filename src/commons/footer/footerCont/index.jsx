import React from 'react';

// css
import styles from "./footerCont.module.scss";

// constants
import footer from '../../../constants/footer';

// components
import FooterList from "./footerList";


const FooterCont = () => {
    return (
        <div className={styles.footer__cont}>
            {
                footer.map((item) => {
                    return(
                        <FooterList item={item} key={item.id} />
                    )
                })
            }
        </div>
    )
}

export default FooterCont;