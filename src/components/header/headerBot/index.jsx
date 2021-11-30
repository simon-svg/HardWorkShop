import React from 'react';

// css
import styles from "./headerBot.module.scss";

// components
import HeaderBotCont from "./headerBotCont";

// commons
import Wrapper from '../../../commons/wrapper';


const HeaderBot = ({ handleDarkModeChange, lightIcon }) => {
    return (
        <div className={styles.header}>
            <Wrapper>
                <HeaderBotCont handleDarkModeChange={handleDarkModeChange} lightIcon={lightIcon} />
            </Wrapper>
        </div>
    )
}

export default HeaderBot;