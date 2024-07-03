import React from "react";
import styles from "./index.module.scss";

interface IItemDisplay {
    readonly headText: string;
    readonly description: string;
    readonly buttonText: string;
    image: string;
}

export function ItemDisplay({
    headText,
    description,
    buttonText,
    image,
}: IItemDisplay) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.text_wrapper}>
                    <div className={styles.header_text}>{headText}</div>
                    <span>{description}</span>
                    <div className={styles.learn_more}>{buttonText}</div>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={image} alt='fm' />
                </div>
            </div>{" "}
        </>
    );
}
