import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

interface IItemDisplay {
    readonly headText: string;
    readonly description: string;
    readonly buttonText: string;
    image: string;
    differentBackground?: boolean;
}

export function ItemDisplay({
    headText,
    description,
    buttonText,
    image,
    differentBackground,
}: IItemDisplay) {
    return (
        <>
            <div
                className={classNames(styles.container, {
                    [styles.differentBackground]: differentBackground,
                })}
            >
                <div
                    className={classNames(styles.text_wrapper)}
                >
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
