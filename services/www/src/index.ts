/// <reference types="./sass-modules" />

import { App } from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

import "./global.scss";

const rootDivContainer = document.createElement('div');
document.body.append(rootDivContainer);
const domContainer = rootDivContainer;

const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));