import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./infrastructure/app/App";
import { appStore } from "./infrastructure/store/store";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <Provider store={appStore}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>
);
