import * as React from "react";

import { getConfig, Stuff } from "@12f-template/config";

import { cx } from "@12f-template/config/utils";
import styles from "./App.module.scss";

console.log("styles", styles);

console.log("config", getConfig());

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IProps {}

export function App(props: IProps) {
    const [toggle] = React.useState<boolean>(false);

    const derivedStateIgnored = React.useMemo(() => {
        return !toggle;
    }, [toggle]);

    return (
        <div
            className={cx(styles["hello-world"])}
            data-qa-component-name={"app"}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick={() => {}}
        >
            Hello World
            <Stuff />
        </div>
    );
}
