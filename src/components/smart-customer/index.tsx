import React from "react";
import styles from "./index.module.scss";
import SmartSupportFooter from "../smart-support-footer";

export function SmartCustomer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text_wrapper}>
                    <div className={styles.header_text}>
                        Smarter Customer Support
                    </div>
                    <span>Enif AI vs. Chatbots</span>
                    <div className={styles.get_started}>Get Started</div>
                </div>
                <div className={styles.image_wrapper}>
                    <img src='assets/images/grp.png' alt='grp' />
                </div>
            </div>
            {/* <SmartSupportFooter /> */}
        </>
    );
}
