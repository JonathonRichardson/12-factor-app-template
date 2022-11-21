import { App } from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

const domContainer = document.querySelector('#like_button_container');

if (domContainer) {
    const root = ReactDOM.createRoot(domContainer);
    root.render(React.createElement(App));
}

function component() {
    const element = document.createElement('div');

    element.innerHTML =['Hello', 'webpack'].join(' ');

    return element;
}

document.body.appendChild(component());