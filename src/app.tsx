import "./styles/styles.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import PasswordView from "./components/password/PasswordView";

ReactDOM.render(
  <div className="ApplicationView">
    <PasswordView />
  </div>,
  document.getElementById("mount")
);
