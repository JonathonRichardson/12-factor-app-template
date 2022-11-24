import * as React from "react";
import styles from "./App.module.scss";

import { getConfig } from "@12f-template/config";

console.log('styles', styles);

console.log('config', getConfig());

import { Stuff } from "@12f-template/config";

export function App() {
    return (
        <div className={styles['hello-world']} qa-component-name={'app'}>
            Hello World
            <Stuff />
        </div>
    )
};