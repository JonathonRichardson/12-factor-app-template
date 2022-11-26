/// <reference types="./sass-modules" />

import { createRoot } from "react-dom/client";
import * as React from "react";
import { App } from "./App";

import "./global.scss";

const rootDivContainer = document.createElement("div");
document.body.append(rootDivContainer);
const domContainer = rootDivContainer;

const root = createRoot(domContainer);
root.render(React.createElement(App));
