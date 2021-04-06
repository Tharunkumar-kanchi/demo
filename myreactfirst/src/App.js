import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CustomRouter } from "./customRouter.js";
import { Links } from "./links.js";
import "./styles/style.css";

function hello() {
  return (
    <div className="App">
      <div className="intro">
        <center>
          <h1>Hello myreactfirst application</h1>
        </center>
      </div>

      <Router>
        <div>
          <Links />
        </div>

        <hr />
        <br />
        <div>
          <CustomRouter />
        </div>
      </Router>
    </div>
  );
}
export default hello;
