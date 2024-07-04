import React from "react";
import styles from "./index.module.scss";

export function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <img src='/assets/images/Group 48096035.jpg' alt='Group' />
                <div className={styles.subcontent}>
                    <div>
                        At Enif, we are dedicated to harnessing the power of AI
                        responsibly. We pledge to uphold transparency, data
                        privacy, and fairness in all our AI-driven processes.
                    </div>
                    <div>
                        Our promise is to enable you, our users, to thrive while
                        actively preventing AI abuse. Together, let's shape a
                        future where technology truly works for the betterment
                        of all.
                    </div>
                </div>
            </div>
            <div className={styles.list_menu}>
                <div className={styles.logo_container}>
                    <div className={styles.header}>Platform</div>
                    <div className={styles.subcontent}>
                        <div>
                            Automate operations Business Insight Knowledge Base
                            Transform Your Sales Drive Efficiency Apps
                            Integrations
                        </div>
                        <div className={styles.inner_sub}>
                            <div className={styles.inner_header}>Solutions</div>
                            <div className={styles.inner_content}>
                                Privacy Policy Terms & Condition Data privacy
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.logo_container}>
                <div className={styles.header}>Channels</div>
                <div className={styles.subcontent}>
                    <div>
                        Emails Live-Chat Instagram WhatsApp Facebook Mobile Apps
                    </div>
                    <div className={styles.inner_sub}>
                        <div className={styles.inner_header}> Legal</div>
                        <div className={styles.inner_content}>
                            Privacy Policy Terms & Condition Data privacy
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.logo_container}>
                <div className={styles.header}>Industries</div>
                <div className={styles.subcontent}>
                    <div>
                        Financial Services E-commerce Education Healthcare Real
                        Estate Hospitality Tourism
                    </div>
                </div>
            </div>
            <div className={styles.logo_container}>
                <div className={styles.header}>Pricing</div>
                <div className={styles.subcontent_pricing}>
                    <div>Starter (Monthly) Pro (Monthly) Premium (Monthly)</div>
                </div>
            </div>
        </div>
    );
}
