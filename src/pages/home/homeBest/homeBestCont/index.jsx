import React from 'react';

// css
import styles from "./homeBestCont.module.scss";

// constants
import bestProducts from "../../../../constants/BestProducts";

// components
import HomeBestItem from "./homeBestItem";


const HomeBestCont = () => {
    return (
        <div className={styles.home__best_cont}>
            {
                bestProducts.map((item) => {
                    return (
                        <HomeBestItem
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            info={item.info}
                            img={item.img} />
                    )
                })
            }
        </div>
    )
}

export default HomeBestCont;