import React from "react";
import styles from "./index.module.scss";
import { RiArrowDropDownLine } from "react-icons/ri";

export function TopNav() {
    return (
        <div className={styles.container}>
            <div>
                <img src='/assets/images/Group 48096035.jpg' alt='Group' />
            </div>
            <div className={styles.list_menu}>
                <div className={styles.list_item}>
                    Platform <RiArrowDropDownLine size={30} />
                </div>
                <div className={styles.list_item}>
                    <div>Platform</div>
                    <div>
                        <RiArrowDropDownLine size={30} />
                    </div>
                </div>
                <div className={styles.list_item}>
                    <div>Platform</div>
                    <div>
                        <RiArrowDropDownLine size={30} />
                    </div>
                </div>
                <div className={styles.list_item}>
                    <div>Platform</div>
                    <div>
                        <RiArrowDropDownLine size={30} />
                    </div>
                </div>
            </div>
            <div className={styles.learn_more_wrapper}>
                <div className={styles.learn_more}>Learn more</div>
            </div>
        </div>
    );
}
