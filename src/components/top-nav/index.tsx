"use Client";
import React, { useState } from "react";
import styles from "./index.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import classNames from "classnames";

export function TopNav() {
    const [active, setActive] = useState(null);

    const handleClick = (index: any) => {
        setActive(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <img src='/assets/images/Group 48096035.jpg' alt='Group' />
            </div>
            <div className={styles.list_menu}>
                {["Platform", "Solutions", "Channels", "Pricing"].map(
                    (item, index) => (
                        <div
                            key={index}
                            className={classNames(styles.list_item, {
                                [styles.active]: active === index,
                            })}
                            onClick={() => handleClick(index)}
                        >
                            <div>{item}</div>
                            <div>
                                <RiArrowDropDownLine size={30} />
                            </div>
                        </div>
                    )
                )}
            </div>
            <div className={styles.learn_more_wrapper}>
                <div className={styles.learn_more}>Learn more</div>
            </div>
        </div>
    );
}
