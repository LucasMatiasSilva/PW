import React from "react";
import ReactDOM from "react-dom";
import Store from "./store";
import App from "./containers/App";

import "./styles.css";
import { initialState as auth } from "./store/Session";

const Index = () => (
  <Store.Provider initialState={auth}>
    <App />
  </Store.Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
