import React from "react";
import styles from "./index.module.scss";

export function DitchScript() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text_wrapper}>
                    <div className={styles.header_text}>
                        Ditch the Script, Get Smart Support
                    </div>
                    <span>
                        Enif AI is more than a chatbot. It understands your
                        business, products, and policies to deliver personalized
                        solutions for each customer. (Highlights personalization
                        and unique value proposition)
                    </span>
                    <div className={styles.learn_more}>Learn more</div>
                </div>
                <div className={styles.image_wrapper}>
                    <img src='assets/images/Frame 1000006767.png' alt='fm' />
                </div>
            </div>{" "}
        </>
    );
}
