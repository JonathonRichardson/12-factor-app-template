import * as React from "react";
import styles from "./App.module.scss";

console.log('styles', styles)

export function App() {
    return (
        <div className={styles['hello-world']}>
            Hello World
        </div>
    )
};