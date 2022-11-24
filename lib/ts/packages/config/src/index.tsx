/// <reference types="./sass-modules" />
import * as React from "react";
import styles from "./index.module.scss";

export function getConfig() {
    return {
        url: 'https://google5.com',
        secondaryUrl: '',
    }
}

export function Stuff() {
    return (<div className={styles['component']}>There's stuff here</div>)
}