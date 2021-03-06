/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";
import { connect } from "./config/sockets";

// this is the first version of our app
const RELEASE = "1.0.0";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: "https://02067a0572a0487e8be16f4a6b401829@sentry.io/1806812",
    release: RELEASE,
  });
}
connect();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
